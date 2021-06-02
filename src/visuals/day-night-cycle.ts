import { useTimestamp } from "@vueuse/core"
import { computed, reactive } from "vue"
import colorInterpolate from "color-interpolate"
import {
  DAY_NIGHT_CYCLE_COLORS,
  DAY_NIGHT_CYCLE_LENGTH_IN_MS,
} from "@/constants"

const VAR_PREFIX = `--day-night-cycle`

const colorPalette1 = colorInterpolate(
  DAY_NIGHT_CYCLE_COLORS.map((colors) => colors[0])
)
const colorPalette2 = colorInterpolate(
  DAY_NIGHT_CYCLE_COLORS.map((colors) => colors[1])
)
const colorPalette3 = colorInterpolate(
  DAY_NIGHT_CYCLE_COLORS.map((colors) => colors[2])
)

export const useDayNightCycle = () => {
  const { timestamp } = useTimestamp({ interval: 1000 })

  const start = Date.now()
  const progressRaw = computed(
    () => (timestamp.value - start) / DAY_NIGHT_CYCLE_LENGTH_IN_MS
  )
  const progress = computed(() => progressRaw.value % 1)

  const cssVars = computed(() => {
    return {
      [`${VAR_PREFIX}-progress`]: progress.value,
      [`${VAR_PREFIX}-progress-raw`]: progressRaw.value,
      [`${VAR_PREFIX}-gradient-color-1`]: colorPalette1(progress.value),
      [`${VAR_PREFIX}-gradient-color-2`]: colorPalette2(progress.value),
      [`${VAR_PREFIX}-gradient-color-3`]: colorPalette3(progress.value),
      [`${VAR_PREFIX}-transition-duration`]: `${
        DAY_NIGHT_CYCLE_LENGTH_IN_MS / DAY_NIGHT_CYCLE_COLORS.length
      }ms`,
    }
  })

  return reactive({
    progress,
    cssVars,
  })
}
