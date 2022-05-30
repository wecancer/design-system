import React, { useState } from 'react'
import styled from 'styled-components'
import * as ReactDayPicker from 'react-day-picker'
import * as fns from 'date-fns'

import Icon from '../icon'
import Input from '../form/input/input'
import OutsideEvent from '../outside-event'
import useFnsLocale from '../../locale/use-fns-locale'
import DatePickerStyledContainer from './date-picker-styled-container'

const Container = styled(OutsideEvent)`
  position: relative;
  outline: none;
`

const InputContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto 1fr;
`

const InputSeparator = styled.span`
  margin: 0 10px;
`

export type RangePickerDate = ReactDayPicker.DateRange

type OnChange = {
  value: RangePickerDate
}

export type Props = {
  value: RangePickerDate
  onChange?(params: OnChange): void
  fromYear?: number
  toYear?: number
  startLabel?: string
  endLabel?: string
}

const defaultDateFormat = 'dd/MM/yyyy'

const dateToString = (date?: Date) =>
  date ? fns.format(date, defaultDateFormat) : ''

const DatePicker = ({
  value,
  onChange,
  startLabel,
  endLabel,
  fromYear,
  toYear,
}: Props) => {
  const fnsLocale = useFnsLocale()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [fromText, setFromText] = useState(dateToString(value.from))
  const [toText, setToText] = useState(dateToString(value.to))
  const isTheLastMonthOfTheYear =
    value.from?.getMonth() === 11 && value.from?.getFullYear() === toYear

  const handleChange = (data?: RangePickerDate): void => {
    if (typeof onChange === 'function') {
      onChange({
        value: {
          from: data?.from,
          to: data?.to,
        },
      })
      setToText(dateToString(data?.to))
      setFromText(dateToString(data?.from))
    }
  }

  return (
    <Container
      role="button"
      tabIndex={0}
      onClickOutside={() => null}
      onClick={() => setIsOpen(true)}
      onBlur={({ currentTarget, relatedTarget }) => {
        if (currentTarget.contains(relatedTarget as Node)) return
        setIsOpen(false)
      }}
    >
      <InputContainer>
        <Input
          type="text"
          value={fromText}
          label={startLabel}
          placeholder="DD/MM/AAAA"
          onBlur={() => {
            if (fns.isMatch(fromText, defaultDateFormat)) {
              const [day, month, year] = fromText.split('/')

              if ((fromYear || 0) < +year) {
                handleChange({
                  ...value,
                  from: new Date(+year, +month - 1, +day),
                })
                return
              }
            }
            handleChange({
              to: undefined,
              from: undefined,
            })
            setFromText('')
            setToText('')
          }}
          iconButtonRight={{
            onClick(e) {
              e.stopPropagation()
              setIsOpen(!isOpen)
            },
            type: 'calendar',
          }}
          onChange={({ value: val }) => {
            setFromText(`${val}`)
          }}
        />
        <InputSeparator>
          <Icon name="longArrowRight" />
        </InputSeparator>
        <Input
          type="text"
          value={toText}
          label={endLabel}
          placeholder="DD/MM/AAAA"
          onBlur={() => {
            if (fns.isMatch(toText, defaultDateFormat)) {
              const [day, month, year] = toText.split('/')

              if ((toYear || 9999) > +year) {
                handleChange({
                  from: value?.from,
                  to: new Date(+year, +month - 1, +day),
                })
                return
              }
            }
            handleChange({
              from: value?.from,
              to: undefined,
            })
            setToText('')
          }}
          iconButtonRight={{
            onClick(e) {
              e.stopPropagation()
              setIsOpen(!isOpen)
            },
            type: 'calendar',
          }}
          onChange={({ value: val }) => {
            setToText(`${val}`)
          }}
        />
      </InputContainer>
      {isOpen && (
        <DatePickerStyledContainer>
          <ReactDayPicker.DayPicker
            mode="range"
            toYear={toYear}
            selected={value}
            locale={fnsLocale}
            numberOfMonths={isTheLastMonthOfTheYear ? 1 : 2}
            fromYear={fromYear}
            captionLayout="dropdown"
            defaultMonth={value.from}
            onSelect={(date?: ReactDayPicker.DateRange) => {
              handleChange(date)
            }}
          />
        </DatePickerStyledContainer>
      )}
    </Container>
  )
}

export default DatePicker
