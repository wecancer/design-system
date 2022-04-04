import { useContext } from 'react'
import enUS from 'date-fns/locale/en-US'
import ptBR from 'date-fns/locale/pt-BR'

import wecancerContext from '../wecancer-context'

const enabledLangs = {
  'pt-BR': ptBR,
  'en-US': enUS,
}

const useFnsLocale = () => {
  const { language } = useContext(wecancerContext)
  if (!enabledLangs[language]) {
    throw new Error(`fns: Language ${language} is not supported.`)
  }

  return enabledLangs[language]
}

export default useFnsLocale
