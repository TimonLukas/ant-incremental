import { GameState } from "@/game/game-state"
import { Prices, usePrices } from "@/game/values/prices"
import { Bonuses, useBonuses } from "@/game/values/bonuses"
import {
  Productions,
  TotalProductions,
  useProductions,
} from "@/game/values/productions"

export const useValues = (
  state: GameState
): {
  prices: Prices
  bonuses: Bonuses
  productions: Productions
  totalProductions: TotalProductions
} => {
  const prices = usePrices(state)
  const bonuses = useBonuses(state)
  const { productions, totalProductions } = useProductions(state, bonuses)

  return { prices, bonuses, productions, totalProductions }
}
