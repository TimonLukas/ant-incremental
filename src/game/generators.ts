import { Buyable, Nameable, Rebuyable } from "@/game/types"
import { Currency } from "@/game/currency"

const COST_COEFFICIENT = 1.5

export type GeneratorNames =
  | "worker"
  | "breeder"
  | "mother"
  | "queen"
  | "demiGod"

export type ProductionTarget =
  | {
      type: "generators"
      target: GeneratorNames
    }
  | {
      type: "currencies"
      target: Currency
    }

export type Generator = Buyable &
  Rebuyable &
  Nameable & {
    production: ProductionTarget & {
      baseAmount: number
      increase: number
    }
  }

export const generators: Record<GeneratorNames, Generator> = {
  worker: {
    name: "Worker Ant",
    baseCost: { currency: Currency.CRUMBS, amount: 10 },
    costCoefficient: COST_COEFFICIENT,
    production: {
      type: "currencies",
      target: Currency.CRUMBS,
      baseAmount: 1,
      increase: 1,
    },
  },
  breeder: {
    name: "Breeder Ant",
    baseCost: { currency: Currency.CRUMBS, amount: 100 },
    costCoefficient: COST_COEFFICIENT,
    production: {
      type: "generators",
      target: "worker",
      baseAmount: 1,
      increase: 1,
    },
  },
  mother: {
    name: "Mother Ant",
    baseCost: { currency: Currency.CRUMBS, amount: 1600 },
    costCoefficient: COST_COEFFICIENT,
    production: {
      type: "generators",
      target: "breeder",
      baseAmount: 1,
      increase: 1,
    },
  },
  queen: {
    name: "Queen Ant",
    baseCost: { currency: Currency.CRUMBS, amount: 70_000 },
    costCoefficient: COST_COEFFICIENT,
    production: {
      type: "generators",
      target: "mother",
      baseAmount: 1,
      increase: 1,
    },
  },
  demiGod: {
    name: "Demi-god Ant",
    baseCost: { currency: Currency.CRUMBS, amount: 2_000_000 },
    costCoefficient: COST_COEFFICIENT,
    production: {
      type: "generators",
      target: "queen",
      baseAmount: 1,
      increase: 1,
    },
  },
}

export const generatorNames = Object.keys(generators) as GeneratorNames[]
