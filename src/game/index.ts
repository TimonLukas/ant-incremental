import { reactive } from "vue"
import {
  GameState,
  Generator,
  Generators,
  getStartState,
  isCurrencyGenerator,
  isGeneratorGenerator,
  save,
} from "@/game/game-state"
import { AUTOSAVE_INTERVAL_IN_MS } from "@/constants"

export const useGame = (): GameState => {
  const state = reactive<GameState>(getStartState())

  setInterval(() => {
    save(state)
  }, AUTOSAVE_INTERVAL_IN_MS)

  let lastUpdateExecution = Date.now()
  const update = (): void => {
    const elapsedTimeInS = (Date.now() - lastUpdateExecution) / 1000
    lastUpdateExecution = Date.now()

    for (const name in state.generators) {
      const generator = state.generators[name as Generators]

      if (generator.amount === 0) {
        continue
      }

      if (isCurrencyGenerator(generator)) {
        state.currencies[generator.productionTarget].amount +=
          generator.baseProduction * generator.amount * elapsedTimeInS
      }

      if (isGeneratorGenerator(generator)) {
        state.generators[generator.productionTarget].amount +=
          generator.baseProduction *
          Math.pow(generator.productionIncrease, generator.amount - 1) *
          elapsedTimeInS
      }
    }

    requestAnimationFrame(update)
  }
  update()

  return state
}
