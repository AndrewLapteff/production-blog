import { forwardRef, ReactNode, useImperativeHandle } from 'react'
import { useDrag } from '@use-gesture/react'
import { a, useSpring, config } from '@react-spring/web'
import s from './Drawer.module.scss'

const height = window.innerHeight - 100

export const Drawer = forwardRef(
  ({ children }: { children: ReactNode }, ref) => {
    const [{ y }, api] = useSpring(() => ({ y: height }))

    const open = ({ canceled }: { canceled: boolean }) => {
      api.start({
        y: 0,
        immediate: false,
        config: canceled ? config.wobbly : config.stiff
      })
    }
    const close = (velocity = 0) => {
      api.start({
        y: height,
        immediate: false,
        config: { ...config.stiff, velocity }
      })
    }

    useImperativeHandle(ref, () => ({
      open
    }))

    const bind = useDrag(
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
        <a.div
          className={s.sheet}
          {...bind()}
          style={{
            display,
            bottom: `calc(-100vh + ${height - 100}px)`,
            y
          }}
        >
          {children}
        </a.div>
      </div>
    )
  }
)
