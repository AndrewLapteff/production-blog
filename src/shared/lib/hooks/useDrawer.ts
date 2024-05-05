import { useState, useRef, useCallback } from 'react'

interface DrawerHandle {
  open: (args: { canceled: boolean }) => void
}

export const useDrawer = () => {
  const [isOpen, setOpen] = useState(false)
  const [hasDrawerOpened, setHasDrawerOpened] = useState(false)
  const drawerRef = useRef<DrawerHandle | null>(null)
  const openDrawer = useCallback(() => {
    console.log(drawerRef.current)
    if (drawerRef.current === null) return
    setOpen(true)
    setHasDrawerOpened(true)
    drawerRef.current.open({ canceled: false })
  }, [])
  return {
    isDrawerOpen: isOpen,
    openDrawer,
    drawerRef,
    hasDrawerOpened
  }
}
