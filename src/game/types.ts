import { Currency } from "@/game/currency"
import { MaybeRef } from "@vueuse/core"
import { GameState } from "@/game/game-state"

export type Cost = {
  currency: Currency
  amount: MaybeRef<number>
}

export type Buyable = {
  baseCost: Cost
}

export type Rebuyable = {
  costCoefficient: number
}

export type Nameable = {
  name: string
}

export type GameValue<T, P extends keyof GameState = keyof GameState> = {
  [K in P]: Record<keyof GameState[K], T>
}
