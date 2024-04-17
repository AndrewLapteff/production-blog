import { RefObject } from 'react'
import { useEventListener } from './/useEventListener'

export const useClickOutside = (
  ref: RefObject<any>,
  cb: (e: Event) => void
) => {
  useEventListener('click', (e: Event) => {
    if (ref.current == null || ref.current.contains(e.target)) return
    cb(e)
  })
}
