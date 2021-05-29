import { Cost, GameValue } from "@/game/types"
import { GameState } from "@/game/game-state"
import { generatorNames, generators } from "@/game/generators"
import { computed, ComputedRef, unref } from "vue"

export type Prices = GameValue<Cost, "generators">
export type MultiplierPrices = GameValue<
  Cost & { buyAmount: ComputedRef<number> },
  "generators"
>

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

export const useMultiplierPrices = (state: GameState): MultiplierPrices =>
  ({
    generators: Object.fromEntries(
      generatorNames.map((name) => {
        const generator = generators[name]
        const { costCoefficient } = generator
        const rawCostCoefficient = costCoefficient - 1

        const buyAmount = computed(() =>
          Number.isFinite(state.selectedBuyMultipliers.anthill)
            ? state.generators[name].bought +
              state.selectedBuyMultipliers.anthill
            : Math.max(
                Math.floor(
                  Math.log(
                    (state.currencies[generator.baseCost.currency] *
                      rawCostCoefficient) /
                      unref(generator.baseCost.amount) +
                      costCoefficient ** state.generators[name].bought
                  ) / Math.log(costCoefficient)
                ),
                state.generators[name].bought + 1
              )
        )

        return [
          name,
          {
            currency: generator.baseCost.currency,
            amount: computed(
              () =>
                (unref(generator.baseCost.amount) *
                  (costCoefficient ** unref(buyAmount) -
                    costCoefficient ** state.generators[name].bought)) /
                rawCostCoefficient
            ),
            buyAmount,
          },
        ]
      })
    ),
  } as MultiplierPrices)
