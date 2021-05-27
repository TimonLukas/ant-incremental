import { reactive } from "vue"
import { AUTOSAVE_INTERVAL_IN_MS } from "@/constants"
import { generatorNames, generators } from "./generators"
import { GameState, getStartState, save } from "./game-state"
import { Prices, usePrices } from "@/game/prices"

export const useGame = (): {
  state: GameState
  prices: Prices
} => {
  const state = reactive<GameState>(getStartState())

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

      const productionBonus = Math.pow(2, Math.floor(amounts.bought / 10))

      if (generator.production.type === "currency") {
        state.currencies[generator.production.target] +=
          generator.production.baseAmount *
          totalAmount *
          elapsedTimeInS *
          productionBonus
      } else if (generator.production.type === "generator") {
        state.generators[generator.production.target].generated +=
          generator.production.baseAmount *
          Math.pow(generator.production.increase, totalAmount - 1) *
          elapsedTimeInS *
          productionBonus
      }
    }

    requestAnimationFrame(update)
  }
  update()

  const prices = usePrices(state)

  return {
    state,
    prices,
  }
}
