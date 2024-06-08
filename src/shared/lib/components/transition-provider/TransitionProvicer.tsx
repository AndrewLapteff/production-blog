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

type FramerMotion = typeof import('framer-motion')

interface TransitionContextType {
  FramerMotion?: FramerMotion
  isLoaded?: boolean
}

interface TransitionProviderProps {
  children: ReactNode
}
const TransitionContext = createContext<TransitionContextType>({})

const loadLibraries = async () => {
  return await Promise.all([import('framer-motion')])
}

export const TransitionProvider = ({ children }: TransitionProviderProps) => {
  const FramerRef = useRef<FramerMotion | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    loadLibraries().then(([Framer]) => {
      FramerRef.current = Framer
      setIsLoaded(true)
    })
  }, [])

  const value = useMemo(() => {
    return {
      FramerMotion: FramerRef.current,
      isLoaded
    }
  }, [isLoaded])

  return (
    <TransitionContext.Provider
      value={value as Required<TransitionContextType>}
    >
      {children}
    </TransitionContext.Provider>
  )
}

export const useTransition = () => {
  return useContext(TransitionContext) as Required<TransitionContextType>
}
