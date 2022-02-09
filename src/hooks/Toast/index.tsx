import React, {useContext} from 'react'
import {nanoid} from 'nanoid/non-secure'

import {ToastContext, ToastType} from './ToastProvider'

type ToastConfig = {
  delay?: number
  isDismissible?: boolean
}

const configDefaults = {
  delay: 7000,
  isDismissible: true,
}

type Message = React.ReactNode

type UseToast = {
  (message: Message, config?: ToastConfig): void
  error(message: Message, config?: ToastConfig): void
  success(message: Message, config?: ToastConfig): void
}

const useToast = (): UseToast => {
  const {setToasts} = useContext(ToastContext)

  const dispatch = (type: ToastType, message: Message, config: ToastConfig) => {
    const id = nanoid()
    setToasts((map) => [...map, {id, message, type, state: 'opening'}])

    setTimeout(() => {
      setToasts((map) =>
        map.map((item) =>
          item.id === id ? {...item, state: 'closing'} : item,
        ),
      )

      // 200ms after the animation, remove item from the array
      setTimeout(() => {
        setToasts((map) => map.filter((item) => item.id !== id))
      }, 200)
    }, config.delay)
  }

  function toast(message: Message, config?: ToastConfig) {
    dispatch('default', message, {...configDefaults, ...config})
  }

  toast.error = (message: Message, config?: ToastConfig) => {
    dispatch('error', message, {...configDefaults, ...config})
  }

  toast.success = (message: Message, config?: ToastConfig) => {
    dispatch('success', message, {...configDefaults, ...config})
  }

  return toast
}

export default useToast
