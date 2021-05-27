import { GAME_SAVE_LOCAL_STORAGE_KEY } from "@/constants"
import { Currency } from "@/game/currency"
import { generatorNames, GeneratorNames } from "@/game/generators"

const SAVE_GAME_VERSION = 0

export type GameState = {
  currencies: Record<Currency, number>
  generators: Record<
    GeneratorNames,
    {
      bought: number
      generated: number
    }
  >
}

export const initialize = (): GameState => ({
  currencies: {
    [Currency.CRUMBS]: 10,
  },
  generators: Object.fromEntries(
    generatorNames.map((name) => [name, { bought: 0, generated: 0 }])
  ) as GameState["generators"],
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

  return parsedState.state
}

export const getStartState = (): GameState => {
  const savedState = load()

  if (savedState === null) {
    return initialize()
  }

  return savedState
}
