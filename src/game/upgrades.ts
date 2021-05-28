import { Buyable } from "@/game/types"
import { GeneratorNames } from "@/game/generators"
import { Currency } from "@/game/currency"

export enum Upgrades {
  TIER1UPGRADE1,
  TIER1UPGRADE2,
  TIER1UPGRADE3,
  TIER1UPGRADE4,
  TIER1UPGRADE5,
}

export type Upgrade = Buyable & {
  id: Upgrades
  name: string
  description: string
  target: GeneratorNames
  scaleBuyable: GeneratorNames
  coefficient: number
}

export const upgrades: Record<Upgrades, Upgrade> = {
  [Upgrades.TIER1UPGRADE1]: {
    id: Upgrades.TIER1UPGRADE1,
    name: "1st Upgrade",
    description:
      "Worker Ant production is increased based on Breeder Ants purchased",
    target: "worker",
    scaleBuyable: "breeder",
    coefficient: 1.09,
    baseCost: {
      currency: Currency.CRUMBS,
      amount: 1000,
    },
  },
  [Upgrades.TIER1UPGRADE2]: {
    id: Upgrades.TIER1UPGRADE2,
    name: "2nd Upgrade",
    description:
      "Breeder Ant production is increased based on Mother Ants purchased",
    target: "breeder",
    scaleBuyable: "mother",
    coefficient: 1.09,
    baseCost: {
      currency: Currency.CRUMBS,
      amount: 13_000,
    },
  },
  [Upgrades.TIER1UPGRADE3]: {
    id: Upgrades.TIER1UPGRADE3,
    name: "3rd Upgrade",
    description:
      "Mother Ant production is increased based on Queen Ants purchased",
    target: "mother",
    scaleBuyable: "queen",
    coefficient: 1.09,
    baseCost: {
      currency: Currency.CRUMBS,
      amount: 1e6,
    },
  },
  [Upgrades.TIER1UPGRADE4]: {
    id: Upgrades.TIER1UPGRADE4,
    name: "4th Upgrade",
    description:
      "Queen Ant production is increased based on Demi-god Ants purchased",
    target: "queen",
    scaleBuyable: "demiGod",
    coefficient: 1.09,
    baseCost: {
      currency: Currency.CRUMBS,
      amount: 1e8,
    },
  },
  [Upgrades.TIER1UPGRADE5]: {
    id: Upgrades.TIER1UPGRADE5,
    name: "5th Upgrade",
    description:
      "Demi-god Ant production is multipliers based on Worker Ants purchased",
    target: "demiGod",
    scaleBuyable: "worker",
    coefficient: 1.09,
    baseCost: {
      currency: Currency.CRUMBS,
      amount: 1e15,
    },
  },
}

export const upgradesByTargets = Object.values(upgrades).reduce((acc, val) => {
  if (!(val.target in acc)) {
    acc[val.target] = []
  }

  acc[val.target].push(val)
  return acc
}, {} as Record<GeneratorNames, Upgrade[]>)
