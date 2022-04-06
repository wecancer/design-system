import React, { useEffect, useState } from 'react'
import useTranslation from '../../../locale/use-translation'
import html5EmailValidate from '../../../validations/html5-email-validate'

type Validation = {
  email?: boolean
  required?: boolean
}

type CustomValidation = {
  isValid: boolean
  message: string
}

const validationDefaults = {
  email: false,
  required: false,
}

type Setting = {
  ref: React.RefObject<HTMLInputElement>
  value: string
}

const useInputErrorValidation = (
  { ref, value }: Setting,
  validation: Validation,
  customValidation?: CustomValidation,
) => {
  const valids = {
    ...validationDefaults,
    ...validation,
  }
  const t = useTranslation()
  const [isShowError, setIsShowError] = useState(false)
  const isCustomValid = customValidation?.isValid

  const isInvalidRequired = valids.required && value === ''
  const isInvalidEmail =
    valids.email && value !== '' && !html5EmailValidate(value)

  const errorMessage = (() => {
    if (!isShowError) return ''

    if (isInvalidRequired) {
      return t('This field is required')
    }

    if (isInvalidEmail) {
      return t('Type a valid email')
    }

    if (customValidation?.isValid === false) {
      return customValidation.message
    }

    return ''
  })()

  const isInvalid = [isInvalidRequired, isInvalidEmail].includes(true)

  useEffect(() => {
    const element = ref.current
    const handleInvalid = () => {
      element?.setCustomValidity(' ')
      setIsShowError(true)
    }
    element?.addEventListener('invalid', handleInvalid, false)
    return () => {
      element?.removeEventListener('invalid', handleInvalid, false)
    }
  }, [])

  useEffect(() => {
    const element = ref.current
    element?.setCustomValidity(isInvalid ? ' ' : '')
  }, [value])

  useEffect(() => {
    if (isCustomValid !== undefined) {
      const element = ref.current

      // using the custom validation with the HTML5
      // https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation#constraint_api's_element.setcustomvalidity()
      element?.setCustomValidity(isCustomValid ? '' : ' ')
    }
  }, [isCustomValid])

  return { errorMessage, hasError: !!errorMessage }
}

export default useInputErrorValidation
