import React, {useRef, useEffect, useCallback} from 'react'

type OnClickOutside = () => void

export function useClickOutsideEvent(
  ref: React.RefObject<HTMLDivElement>,
  callback: OnClickOutside,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])
}

type Props = React.HTMLAttributes<HTMLDivElement> & {
  onClickOutside: OnClickOutside
}

const OutsideEvent = ({onClickOutside, ...props}: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const callback = useCallback(onClickOutside, [])
  useClickOutsideEvent(ref, callback)

  return <div ref={ref} {...props} />
}

export default OutsideEvent
