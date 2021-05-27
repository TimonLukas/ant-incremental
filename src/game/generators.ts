import { Buyable, Nameable } from "@/game/types"
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
      type: "generator"
      target: GeneratorNames
    }
  | {
      type: "currency"
      target: Currency
    }

export type Generator = Buyable &
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
      type: "currency",
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
      type: "generator",
      target: "worker",
      baseAmount: 1,
      increase: 1.2,
    },
  },
  mother: {
    name: "Mother Ant",
    baseCost: { currency: Currency.CRUMBS, amount: 1600 },
    costCoefficient: COST_COEFFICIENT,
    production: {
      type: "generator",
      target: "breeder",
      baseAmount: 1.5,
      increase: 1.2,
    },
  },
  queen: {
    name: "Queen Ant",
    baseCost: { currency: Currency.CRUMBS, amount: 70_000 },
    costCoefficient: COST_COEFFICIENT,
    production: {
      type: "generator",
      target: "mother",
      baseAmount: 1.5,
      increase: 1.2,
    },
  },
  demiGod: {
    name: "Demi-god Ant",
    baseCost: { currency: Currency.CRUMBS, amount: 2_000_000 },
    costCoefficient: COST_COEFFICIENT,
    production: {
      type: "generator",
      target: "demiGod",
      baseAmount: 2,
      increase: 1.2,
    },
  },
}

export const generatorNames = Object.keys(generators) as GeneratorNames[]
