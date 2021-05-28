import { reactive } from "vue"
import { AUTOSAVE_INTERVAL_IN_MS } from "@/constants"
import { GeneratorNames, generatorNames, generators } from "./generators"
import { GameState, getStartState, save } from "./game-state"
import { Currency } from "@/game/currency"
import { useValues } from "@/game/game-values"

export const useGame = (): {
  state: GameState
} & ReturnType<typeof useValues> => {
  const state = reactive<GameState>(getStartState())
  const { prices, bonuses } = useValues(state)

  setInterval(() => {
    save(state)
  }, AUTOSAVE_INTERVAL_IN_MS)

  let lastUpdateExecution = Date.now()
  const update = (): void => {
    const elapsedTimeInS = (Date.now() - lastUpdateExecution) / 1000
    lastUpdateExecution = Date.now()

    for (const name of generatorNames) {
      const amounts = state.generators[name]
      const totalAmount = amounts.bought + amounts.generated

      if (totalAmount === 0) {
        continue
      }

      const generator = generators[name]

      const productionBonus = bonuses.generators[name].value

      const { type, target, baseAmount } = generator.production

      if (type === "currencies") {
        state.currencies[target as Currency] +=
          baseAmount * totalAmount * elapsedTimeInS * productionBonus
      } else if (generator.production.type === "generators") {
        state.generators[target as GeneratorNames].generated +=
          baseAmount * totalAmount * elapsedTimeInS * productionBonus
      }
    }

    requestAnimationFrame(update)
  }
  update()

  return {
    state,
    prices,
    bonuses,
  }
}
