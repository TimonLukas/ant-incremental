import { reactive, unref } from "vue"
import { AUTOSAVE_INTERVAL_IN_MS } from "@/constants"
import { generatorNames } from "./generators"
import { GameState, getStartState, save } from "./game-state"
import { Currency } from "@/game/currency"
import { useValues } from "@/game/values"

export const useGame = (): {
  state: GameState
} & ReturnType<typeof useValues> => {
  const state = reactive<GameState>(getStartState())
  const { prices, multiplierPrices, bonuses, productions, totalProductions } =
    useValues(state)

  setInterval(() => {
    save(state)
  }, AUTOSAVE_INTERVAL_IN_MS)

  let lastUpdateExecution = Date.now()
  const update = (): void => {
    const elapsedTimeInS = (Date.now() - lastUpdateExecution) / 1000
    lastUpdateExecution = Date.now()

    state.currencies[Currency.CRUMBS] +=
      unref(totalProductions.currencies[Currency.CRUMBS]) * elapsedTimeInS

    for (const name of generatorNames) {
      state.generators[name].generated +=
        unref(totalProductions.generators[name]) * elapsedTimeInS
    }

    requestAnimationFrame(update)
  }
  update()

  return {
    state,
    prices,
    multiplierPrices,
    bonuses,
    productions,
    totalProductions,
  }
}
