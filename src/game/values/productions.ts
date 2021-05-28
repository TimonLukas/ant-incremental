import { computed, ComputedRef } from "vue"
import { GameValue } from "@/game/types"
import { GameState } from "@/game/game-state"
import { Bonuses } from "@/game/values/bonuses"
import { generatorNames, generators } from "@/game/generators"
import { Currency } from "@/game/currency"
import { MaybeRef } from "@vueuse/core"

export type Productions = GameValue<ComputedRef<number>, "generators">
export type TotalProductions = GameValue<MaybeRef<number>>

export const useProductions = (
  state: GameState,
  bonuses: Bonuses
): {
  productions: Productions
  totalProductions: TotalProductions
} => {
  const productions = {
    generators: Object.fromEntries(
      generatorNames.map((name) => [
        name,
        computed(() => {
          const generator = generators[name]
          const generatorState = state.generators[name]
          const totalGeneratorAmount =
            generatorState.generated + generatorState.bought

          return (
            generator.production.baseAmount *
            totalGeneratorAmount *
            bonuses.generators[name].value
          )
        }),
      ])
    ),
  } as Productions

  const totalProductions = {
    currencies: {
      [Currency.CRUMBS]: computed(() => productions.generators.worker.value),
    },
    generators: {
      worker: computed(() => productions.generators.breeder.value),
      breeder: computed(() => productions.generators.mother.value),
      mother: computed(() => productions.generators.queen.value),
      queen: computed(() => productions.generators.demiGod.value),
      demiGod: 0,
    },
  } as TotalProductions

  return { productions, totalProductions }
}
