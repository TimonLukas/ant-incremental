import { GameState } from "@/game/game-state"
import { generatorNames, GeneratorNames, generators } from "@/game/generators"
import { Cost } from "@/game/types"
import { computed, unref } from "vue"

export type Prices = {
  generators: Record<GeneratorNames, Cost>
}

export const usePrices = (state: GameState): Prices => {
  return {
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
    ) as Prices["generators"],
  }
}
