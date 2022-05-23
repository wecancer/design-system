import React, { useState } from 'react'
import styled from 'styled-components'
import { set } from 'date-fns'
import DatePicker from '../date-picker'
import TimePicker from '../time-picker'

const Container = styled.div`
  width: 100%;
  display: flex;

  & > div:first-child {
    margin-right: 15px;
  }
`

type OnChangeParams = {
  value: Date
}

type Props = {
  id?: string
  datetime: Date
  onChange(params: OnChangeParams): void
}

const DateTimePicker = ({ datetime, onChange, id, ...props }: Props) => {
  const [dateValue, setDateValue] = useState(datetime)
  const [timeValue, setTimeValue] = useState(
    `${datetime.getHours()}:${datetime.getMinutes()}`,
  )

  return (
    <Container {...props}>
      <DatePicker
        label="dd/mm/aaaa"
        value={dateValue}
        onChange={({ value }) => {
          setDateValue(value || new Date())
          const newDate =
            value &&
            set(datetime, {
              year: value.getFullYear(),
              month: value.getMonth(),
              date: value.getDate(),
            })
          onChange({ value: newDate || new Date() })
        }}
      />
      <TimePicker
        value={timeValue}
        onChange={({ value }) => {
          setTimeValue(value)
          const [hours, minutes] = timeValue.split(':')
          const newDate = set(datetime, { hours: +hours, minutes: +minutes })
          onChange({ value: newDate })
        }}
      />
    </Container>
  )
}

export default DateTimePicker
