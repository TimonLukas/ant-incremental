import { computed, ComputedRef } from "vue"

import { GameState, Generator, Generators } from "@/game/game-state"
import { GENERATOR_BASE_PRICE_INCREASE } from "@/constants"

export interface Prices {
  generators: {
    [key in Generators]: ComputedRef<number>
  }
}

const useGeneratorPrice = (
  generator: Generator,
  basePrice: number
): ComputedRef<number> =>
  computed(
    () => basePrice * Math.pow(GENERATOR_BASE_PRICE_INCREASE, generator.amount)
  )

export const usePrices = (state: GameState): Prices => ({
  generators: {
    worker: useGeneratorPrice(state.generators.worker, 10),
    breeder: useGeneratorPrice(state.generators.breeder, 100),
    mother: useGeneratorPrice(state.generators.mother, 1600),
    queen: useGeneratorPrice(state.generators.queen, 70000),
    demiGod: useGeneratorPrice(state.generators.demiGod, 2_000_000),
  },
})
