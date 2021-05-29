<template lang="pug">
canvas.ants(ref="canvas" :width="canvasSize.width" :height="canvasSize.height")
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive, onUnmounted } from "vue"
import { useEventListener, useDebounceFn } from "@vueuse/core"
const { PI, sin } = Math

const ANT_SPEED_IN_PX_P_S = 50
const ANT_WIDTH_IN_PX = 4
const ANT_HEIGHT_IN_PX = 2
const ANT_COLOR = "black"
const CRUMB_MIN_SIZE_IN_PX = 3
const CRUMB_MAX_SIZE_IN_PX = 8

type Ant = {
  progress: number
  lastX: number
  lastY: number
} & (
  | {
      lane: "top"
    }
  | {
      lane: "bottom"
      crumb: {
        width: number
        height: number
        color: string
      }
    }
)

const random = (max: number, min = 0): number =>
  min + (Math.random() * max - min)

export default defineComponent({
  props: {
    antsPerSecond: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const canvas = ref<HTMLCanvasElement>()
    const canvasSize = reactive({
      width: 0,
      height: 0,
    })

    function updateCanvasSize() {
      canvasSize.width = canvas.value?.clientWidth ?? 0
      canvasSize.height = canvas.value?.clientHeight ?? 0
    }
    useEventListener("resize", useDebounceFn(updateCanvasSize, 50))
    onMounted(updateCanvasSize)

    onMounted(() => {
      const ctx = canvas.value?.getContext("2d")
      const ants: Ant[] = []

      if (!ctx) {
        return
      }

      const active = ref(true)
      let lastSpawn = 0
      let lastExecution = Date.now()
      function updateAndRender() {
        if (!ctx) {
          return
        }

        const now = Date.now()
        const secondDelta = now - lastExecution
        lastExecution = now
        ctx.clearRect(0, 0, canvasSize.width, canvasSize.height)

        if (Date.now() - lastSpawn > (1 / props.antsPerSecond) * 1000) {
          lastSpawn = now
          ants.push({ lane: "top", progress: 0, lastX: 0, lastY: 0 })
        }

        for (let i = 0; i < ants.length; i++) {
          const ant = ants[i] as Ant
          ant.progress += (ANT_SPEED_IN_PX_P_S * secondDelta) / 1000

          if (ant.progress > canvasSize.width + ANT_WIDTH_IN_PX) {
            if (ant.lane === "top") {
              ants[i] = {
                lane: "bottom",
                progress: -50,
                lastX: 0,
                lastY: 0,
                crumb: {
                  width: Math.round(
                    random(CRUMB_MAX_SIZE_IN_PX, CRUMB_MIN_SIZE_IN_PX)
                  ),
                  height: Math.round(
                    random(CRUMB_MAX_SIZE_IN_PX, CRUMB_MIN_SIZE_IN_PX)
                  ),
                  color: `rgb(${Math.floor(random(255))},${Math.floor(
                    random(255)
                  )},${Math.floor(random(255))})`,
                },
              }
            } else {
              ants.splice(i, 1)
              continue
            }
          }

          const x = ant.progress + now / 1000
          const a = canvasSize.width
          const b = canvasSize.width * 0.4
          const c = canvasSize.width * 2.7
          const yDeviation =
            5 * (sin((x * PI) / a) + sin((x * PI) / b) + sin((x * PI) / c))

          ctx.fillStyle = ANT_COLOR
          if (ant.lane === "top") {
            const nextX = canvasSize.width - ant.progress
            const nextY = 20 + yDeviation
            ctx.save()
            ctx.translate(nextX, nextY)
            ctx.rotate(Math.atan2(nextY - ant.lastY, nextX - ant.lastX))
            ctx.fillRect(0, 0, ANT_WIDTH_IN_PX, ANT_HEIGHT_IN_PX)
            ctx.restore()
            ant.lastX = nextX
            ant.lastY = nextY
          } else {
            const nextX = ant.progress
            const nextY = canvasSize.height - 40 + yDeviation
            ctx.save()
            ctx.translate(ant.progress, canvasSize.height - 40 + yDeviation)
            ctx.rotate(Math.atan2(nextY - ant.lastY, nextX - ant.lastX))
            ctx.fillRect(0, 0, ANT_WIDTH_IN_PX, ANT_HEIGHT_IN_PX)
            ctx.fillStyle = ant.crumb.color
            ctx.fillRect(
              ANT_WIDTH_IN_PX / 2 - ant.crumb.width / 2,
              0,
              ant.crumb.width,
              -ant.crumb.height
            )
            ctx.restore()
            ant.lastX = nextX
            ant.lastY = nextY
          }
        }

        if (active.value) {
          requestAnimationFrame(updateAndRender)
        }
      }

      updateAndRender()

      onUnmounted(() => {
        active.value = false
      })
    })

    return {
      canvas,
      canvasSize,
    }
  },
})
</script>

<style lang="sass">
canvas.ants
  image-rendering: pixelated
  z-index: 10
</style>
