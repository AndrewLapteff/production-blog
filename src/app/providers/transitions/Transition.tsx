import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export const transition = (Component: ReactNode) => {
  return () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {Component}
    </motion.div>
  )
}
