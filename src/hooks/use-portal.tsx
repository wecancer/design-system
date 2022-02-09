import React, {useCallback, useContext} from 'react'
import ReactDOM from 'react-dom'

import WecancerContext from '../wecancer-context'

type UsePortal = {
  add(children: React.ReactNode): React.ReactPortal
}

const usePortal = (): UsePortal => {
  const {rootElement} = useContext(WecancerContext)
  if (!rootElement) {
    throw new Error(
      `The element root not found in the document. Check if the WecancerProvider is installed on your project.`,
    )
  }

  return {
    add: useCallback(
      (children) => {
        return ReactDOM.createPortal(children, rootElement)
      },
      [rootElement],
    ),
  }
}

export default usePortal
