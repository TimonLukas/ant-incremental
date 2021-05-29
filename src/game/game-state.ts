import { GAME_SAVE_LOCAL_STORAGE_KEY } from "@/constants"
import { Currency } from "@/game/currency"
import { generatorNames, GeneratorNames } from "@/game/generators"
import { upgrades, Upgrades } from "@/game/upgrades"

const SAVE_GAME_VERSION = 3

export type GameState = {
  currencies: Record<Currency, number>
  generators: Record<
    GeneratorNames,
    {
      bought: number
      generated: number
    }
  >
  upgrades: Record<Upgrades, boolean>
  selectedBuyMultipliers: Record<"anthill", number>
}

export const initialize = (): GameState => ({
  currencies: {
    [Currency.CRUMBS]: 10,
  },
  generators: Object.fromEntries(
    generatorNames.map((name) => [name, { bought: 0, generated: 0 }])
  ) as GameState["generators"],
  upgrades: Object.fromEntries(
    Array.from({ length: Object.keys(upgrades).length }, (_, i) => [i, false])
  ) as Record<Upgrades, boolean>,
  selectedBuyMultipliers: {
    anthill: 1,
  },
})

type SavedGameState = {
  state: GameState
  version: number
}

export const save = (state: GameState): void => {
  const saveGame = {
    state,
    version: SAVE_GAME_VERSION,
  }

  window.localStorage.setItem(
    GAME_SAVE_LOCAL_STORAGE_KEY,
    JSON.stringify(saveGame)
  )
}

export const load = (): GameState | null => {
  const savedState = window.localStorage.getItem(GAME_SAVE_LOCAL_STORAGE_KEY)

  if (savedState === null) {
    return null
  }

  const parsedState: SavedGameState = JSON.parse(savedState)

  if (
    typeof parsedState.version === "undefined" ||
    parsedState.version < SAVE_GAME_VERSION
  ) {
    return null
  }

  if (parsedState.state.selectedBuyMultipliers.anthill === null) {
    parsedState.state.selectedBuyMultipliers.anthill = Infinity
  }

  return parsedState.state
}

export const getStartState = (): GameState => {
  const savedState = load()

  if (savedState === null) {
    return initialize()
  }

  return savedState
}
