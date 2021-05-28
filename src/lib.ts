import { inject, unref } from "vue"
import { PROVIDE_KEY } from "@/constants"
import { useGame } from "@/game"
import { MaybeRef } from "@vueuse/core"

type UseGameReturn = ReturnType<typeof useGame>
export const useProvidedGame = (): UseGameReturn =>
  inject(PROVIDE_KEY) as UseGameReturn

const formatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
})
export const format = (value: MaybeRef<number>): string => {
  const unrefValue = unref(value)

  if (unrefValue < 1e5) {
    return formatter.format(unrefValue)
  }

  return unrefValue.toExponential(2)
}
