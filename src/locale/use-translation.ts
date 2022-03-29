import { useContext } from 'react'
import wecancerContext from '../wecancer-context'
import ptBR from './languages/pt-BR.json'

const langMap = {
  'pt-BR': ptBR,
  'en-US': {},
}

const useTranslation = () => {
  const { language } = useContext(wecancerContext)

  return (str: string) => {
    const selectedLang = langMap[language] as { [key: string]: string }
    if (!selectedLang) return str
    return (selectedLang && selectedLang[str]) || str
  }
}

export default useTranslation
