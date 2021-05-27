import { Currency } from "@/game/currency"
import { MaybeRef } from "@vueuse/core"

export type Cost = {
  currency: Currency
  amount: MaybeRef<number>
}

export type Buyable = {
  baseCost: Cost
  costCoefficient: number
}

export type Nameable = {
  name: string
}
