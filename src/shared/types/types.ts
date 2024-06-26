export type Mods = Record<string, boolean>

export type ThemeProps = 'normal' | 'error'
export type Size = 's' | 'm' | 'l' | 'xs'
export type Align = 'left' | 'right' | 'center'

export type EventListenerType =
  | 'abort'
  | 'animationend'
  | 'animationiteration'
  | 'animationstart'
  | 'blur'
  | 'canplay'
  | 'canplaythrough'
  | 'change'
  | 'click'
  | 'contextmenu'
  | 'copy'
  | 'cut'
  | 'dblclick'
  | 'drag'
  | 'dragend'
  | 'dragenter'
  | 'dragleave'
  | 'dragover'
  | 'dragstart'
  | 'drop'
  | 'durationchange'
  | 'emptied'
  | 'ended'
  | 'error'
  | 'focus'
  | 'focusin'
  | 'focusout'
  | 'fullscreenchange'
  | 'fullscreenerror'
  | 'gotpointercapture'
  | 'input'
  | 'invalid'
  | 'keydown'
  | 'keypress'
  | 'keyup'
  | 'load'
  | 'loadeddata'
  | 'loadedmetadata'
  | 'loadstart'
  | 'lostpointercapture'
  | 'mousedown'
  | 'mouseenter'
  | 'mouseleave'
  | 'mousemove'
  | 'mouseout'
  | 'mouseover'
  | 'mouseup'
  | 'paste'
  | 'pause'
  | 'play'
  | 'playing'
  | 'pointercancel'
  | 'pointerdown'
  | 'pointerenter'
  | 'pointerleave'
  | 'pointermove'
  | 'pointerout'
  | 'pointerover'
  | 'pointerup'
  | 'progress'
  | 'ratechange'
  | 'reset'
  | 'resize'
  | 'scroll'
  | 'seeked'
  | 'seeking'
  | 'select'
  | 'selectionchange'
  | 'selectstart'
  | 'stalled'
  | 'submit'
  | 'suspend'
  | 'timeupdate'
  | 'toggle'
  | 'touchcancel'
  | 'touchend'
  | 'touchmove'
  | 'touchstart'
  | 'transitionend'
  | 'volumechange'
  | 'waiting'
  | 'wheel'
