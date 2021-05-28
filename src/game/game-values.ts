import { computed, unref, ComputedRef } from "vue"
import { GameState } from "@/game/game-state"
import { Cost } from "@/game/types"
import { generatorNames, generators } from "@/game/generators"

type GameValue<T, P extends keyof GameState = keyof GameState> = {
  [K in P]: Record<keyof GameState[K], T>
}

type Prices = GameValue<Cost, "generators">
type Bonuses = GameValue<ComputedRef<number>, "generators">

export const useValues = (
  state: GameState
): {
  prices: Prices
  bonuses: Bonuses
} => ({
  prices: {
    generators: Object.fromEntries(
      generatorNames.map((name) => [
        name,
        {
          currency: generators[name].baseCost.currency,
          amount: computed(
            () =>
              unref(generators[name].baseCost.amount) *
              Math.pow(
                generators[name].costCoefficient,
                state.generators[name].bought
              )
          ),
        },
      ])
    ),
  } as Prices,
  bonuses: {
    generators: Object.fromEntries(
      generatorNames.map((name) => [
        name,
        computed(() =>
          Math.pow(2, Math.floor(state.generators[name].bought / 10))
        ),
      ])
    ),
  } as Bonuses,
})
