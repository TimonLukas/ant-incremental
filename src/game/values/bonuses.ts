import { computed, ComputedRef } from "vue"
import { GameValue } from "@/game/types"
import { GameState } from "@/game/game-state"
import { generatorNames } from "@/game/generators"
import { upgradesByTargets } from "@/game/upgrades"

export type Bonuses = GameValue<ComputedRef<number>, "generators">

export const useBonuses = (state: GameState): Bonuses => {
  const upgradeBonusesByGenerator = Object.fromEntries(
    generatorNames.map((name) => [
      name,
      computed(() =>
        (upgradesByTargets[name] ?? []).reduce(
          (acc, val) =>
            acc *
            (state.upgrades[val.id]
              ? val.coefficient * state.generators[val.scaleBuyable].bought
              : 1),
          1
        )
      ),
    ])
  )

  return {
    generators: Object.fromEntries(
      generatorNames.map((name) => [
        name,
        computed(
          () =>
            Math.pow(2, Math.floor(state.generators[name].bought / 10)) *
            upgradeBonusesByGenerator[name].value
        ),
      ])
    ),
  } as Bonuses
}
