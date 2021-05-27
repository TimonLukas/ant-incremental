import { GAME_SAVE_LOCAL_STORAGE_KEY } from "@/constants"

export type Generator = {
  amount: number
  modifiers: number[]
  productionType: "currencies" | "generators"
  productionTarget: Currencies | Generators
  baseProduction: number
  productionIncrease: number
}

export type CurrencyGenerator = Generator & {
  productionType: "currencies"
  productionTarget: Currencies
}

export type GeneratorGenerator = Generator & {
  productionType: "generators"
  productionTarget: Generators
}

export const isCurrencyGenerator = (
  generator: Generator
): generator is CurrencyGenerator => generator.productionType === "currencies"

export const isGeneratorGenerator = (
  generator: Generator
): generator is GeneratorGenerator => generator.productionType === "generators"

export interface Currency {
  amount: number
}

export type Currencies = "crumbs"
export type Generators = "worker" | "breeder" | "mother" | "queen" | "demiGod"

export interface GameState {
  currencies: {
    [key in Currencies]: Currency
  }

  generators: {
    [key in Generators]: Generator
  }

  upgrades: boolean[]
}

export const initialize = (): GameState => ({
  currencies: {
    crumbs: {
      amount: 10,
    },
  },
  generators: {
    worker: {
      amount: 0,
      modifiers: [],
      productionType: "currencies",
      productionTarget: "crumbs",
      baseProduction: 3,
      productionIncrease: 3,
    },
    breeder: {
      amount: 0,
      modifiers: [],
      productionType: "generators",
      productionTarget: "worker",
      baseProduction: 2.5,
      productionIncrease: 1.44,
    },
    mother: {
      amount: 0,
      modifiers: [],
      productionType: "generators",
      productionTarget: "breeder",
      baseProduction: 1.5,
      productionIncrease: 1.44,
    },
    queen: {
      amount: 0,
      modifiers: [],
      productionType: "generators",
      productionTarget: "mother",
      baseProduction: 4,
      productionIncrease: 1.44,
    },
    demiGod: {
      amount: 0,
      modifiers: [],
      productionType: "generators",
      productionTarget: "queen",
      baseProduction: 3,
      productionIncrease: 1.44,
    },
  },
  upgrades: [],
})

export const save = (state: GameState): void => {
  window.localStorage.setItem(
    GAME_SAVE_LOCAL_STORAGE_KEY,
    JSON.stringify(state)
  )
}

export const load = (): GameState | null => {
  const savedState = window.localStorage.getItem(GAME_SAVE_LOCAL_STORAGE_KEY)

  if (savedState === null) {
    return null
  }

  return JSON.parse(savedState)
}

export const getStartState = (): GameState => {
  const savedState = load()

  if (savedState === null) {
    return initialize()
  }

  return savedState
}
