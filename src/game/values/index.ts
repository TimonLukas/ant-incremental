import { GameState } from "@/game/game-state"
import {
  Prices,
  usePrices,
  MultiplierPrices,
  useMultiplierPrices,
} from "@/game/values/prices"
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
  multiplierPrices: MultiplierPrices
  bonuses: Bonuses
  productions: Productions
  totalProductions: TotalProductions
} => {
  const prices = usePrices(state)
  const multiplierPrices = useMultiplierPrices(state)
  const bonuses = useBonuses(state)
  const { productions, totalProductions } = useProductions(state, bonuses)

  return { prices, multiplierPrices, bonuses, productions, totalProductions }
}
