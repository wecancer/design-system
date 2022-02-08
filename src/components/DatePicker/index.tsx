import React, {useState} from 'react'
import * as ReactDayPicker from 'react-day-picker'
import styled from 'styled-components'
import * as fns from 'date-fns'
import ptLocale from 'date-fns/locale/pt-BR'

import Input from '../Form/Input/Input'
import DatePickerStyledContainer from './DatePickerStyledContainer'

const defaultDateFormat = 'dd/MM/yyyy'

const Container = styled.div`
  position: relative;
`

export type DatePickerValue = Date

type ModifierStatus = ReactDayPicker.ActiveModifiers

type OnChange = {
  value?: DatePickerValue
}

export type Props = {
  label?: string
  value?: DatePickerValue
  onChange?(params: OnChange): void
  fromYear?: number
  toYear?: number
}

const DatePicker = ({label, value, onChange, fromYear, toYear}: Props) => {
  if (value && !(value instanceof Date)) {
    throw new Error('The value attribute should be a date instance.')
  }

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const {inputProps, dayPickerProps} = ReactDayPicker.useInput({
    format: 'dd/MM/yyyy',
    defaultSelected: value || undefined,
    required: true,
  })

  const handleChange = (data?: DatePickerValue): void => {
    if (typeof onChange === 'function') {
      onChange({value: data})
    }
  }

  return (
    <Container
      role="button"
      tabIndex={0}
      onClick={() => setIsOpen(true)}
      onKeyDown={() => null}
      onBlur={({currentTarget, relatedTarget}) => {
        if (currentTarget.contains(relatedTarget as Node)) return
        setIsOpen(false)
      }}
    >
      <Input
        type="text"
        {...inputProps}
        label={label}
        value={`${inputProps.value}`}
        iconButtonRight={{
          onClick(e) {
            e.stopPropagation()
            setIsOpen(!isOpen)
          },
          type: 'calendar',
        }}
        onChange={({event}) => inputProps.onChange?.(event as React.ChangeEvent<HTMLInputElement>)}
        onBlur={(e) => {
          inputProps.onBlur?.(e as React.FocusEvent<HTMLInputElement>)
          const val = inputProps?.value || undefined
          if (typeof val === 'string' && fns.isMatch(val, defaultDateFormat)) {
            const [day, month, year] = val.split('/')
            handleChange(new Date(+year, +month - 1, +day))
            return
          }
          handleChange(undefined)
        }}
      />
      {isOpen && (
        <DatePickerStyledContainer>
          <ReactDayPicker.DayPicker
            {...dayPickerProps}
            mode="single"
            toYear={toYear}
            showOutsideDays
            selected={value}
            locale={ptLocale}
            fromYear={fromYear}
            captionLayout="dropdown"
            onSelect={(date?: Date, selectedDay?: Date, modifiers?: ModifierStatus, evt?: React.MouseEvent) => {
              if (date) {
                evt?.stopPropagation()
                setIsOpen(false)
                handleChange(date)
              }
            }}
          />
        </DatePickerStyledContainer>
      )}
    </Container>
  )
}

export default DatePicker
