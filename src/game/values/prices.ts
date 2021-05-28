import { Cost, GameValue } from "@/game/types"
import { GameState } from "@/game/game-state"
import { generatorNames, generators } from "@/game/generators"
import { computed, unref } from "vue"

export type Prices = GameValue<Cost, "generators">

export const usePrices = (state: GameState): Prices =>
  ({
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
  } as Prices)
