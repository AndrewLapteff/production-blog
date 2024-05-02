// this component provides libraries, such as react-gesture and react-spring dinaically
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'

type GestureType = typeof import('@use-gesture/react')
type SpringType = typeof import('@react-spring/web')

interface AnimationContextType {
  Gesture?: GestureType
  Spring?: SpringType
  isLoaded?: boolean
}

interface AnimationProviderProps {
  children: ReactNode
}
const AnimationContext = createContext<AnimationContextType>({})

const loadLibraries = async () => {
  return await Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react')
  ])
}

export const AnimationProvider = ({ children }: AnimationProviderProps) => {
  const SpringRef = useRef<SpringType | null>(null)
  const GestureRef = useRef<GestureType | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    loadLibraries().then(([Spring, Gesture]) => {
      SpringRef.current = Spring
      GestureRef.current = Gesture
      setIsLoaded(true)
    })
  }, [])

  const value = useMemo(() => {
    return { Gesture: GestureRef.current, Spring: SpringRef.current, isLoaded }
  }, [isLoaded])

  return (
    <AnimationContext.Provider value={value as Required<AnimationContextType>}>
      {children}
    </AnimationContext.Provider>
  )
}

export const useAnimation = () => {
  return useContext(AnimationContext) as Required<AnimationContextType>
}
