import { forwardRef, ReactNode, useImperativeHandle } from 'react'
import s from './Drawer.module.scss'
import { useAnimation } from 'shared/lib/components/animation-provider/AnimationProvicer'

interface DrawerProps {
  children: ReactNode
  height?: number
}

export const DrawerContent = forwardRef(
  ({ children, height = window.innerHeight - 100 }: DrawerProps, ref) => {
    const { Spring, Gesture } = useAnimation()

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

    const open = ({ canceled }: { canceled: boolean }) => {
      api.start({
        y: 0,
        immediate: false,
        config: canceled ? Spring.config.wobbly : Spring.config.stiff
      })
    }
    const close = (velocity = 0) => {
      api.start({
        y: height,
        immediate: false,
        config: { ...Spring.config.stiff, velocity }
      })
    }

    useImperativeHandle(ref, () => ({
      open
    }))

    const bind = Gesture.useDrag(
      ({
        last,
        velocity: [, vy],
        direction: [, dy],
        offset: [, oy],
        cancel,
        canceled
      }) => {
        if (oy < -70) cancel()

        if (last) {
          oy > height * 1 || (vy > 1 && dy > 0) ? close(vy) : open({ canceled })
        } else api.start({ y: oy, immediate: true })
      },
      {
        from: () => [0, y.get()],
        filterTaps: true,
        bounds: { top: 0 },
        rubberband: true
      }
    )

    const display = y.to((py) => (py < height ? 'block' : 'none'))

    return (
      <div className="flex" style={{ overflow: 'hidden' }}>
        <Spring.a.div
          className={s.sheet}
          {...bind()}
          style={{
            display,
            bottom: `calc(-100vh + ${height - 100}px)`,
            y
          }}
        >
          {children}
        </Spring.a.div>
      </div>
    )
  }
)

export const Drawer = forwardRef((props: DrawerProps, ref) => {
  const { isLoaded } = useAnimation()

  if (!isLoaded) return null

  return <DrawerContent {...props} ref={ref} />
})
