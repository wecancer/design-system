import React, { useState } from 'react'
import styled from 'styled-components'
import { set } from 'date-fns'
import DatePicker from '../date-picker'
import TimePicker from '../time-picker'

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;

  & > div:last-child {
    margin-left: 20px;
  }
`

type OnChangeParams = {
  value: Date
}

type Props = {
  id?: string
  datetime: Date
  labelDatePicker?: string
  labelTimePicker?: string
  onChange(params: OnChangeParams): void
}

const DateTimePicker = ({
  datetime,
  onChange,
  id,
  labelDatePicker,
  labelTimePicker,
  ...props
}: Props) => {
  const [dateValue, setDateValue] = useState(datetime)
  const [timeValue, setTimeValue] = useState(
    `${datetime.getHours()}:${datetime.getMinutes()}`,
  )

  return (
    <Container {...props}>
      <DatePicker
        label={labelDatePicker}
        value={dateValue}
        onChange={({ value }) => {
          setDateValue(value || new Date(0, 0, 0, 0, 0, 0, 0))
          const newDate =
            value &&
            set(datetime, {
              year: value.getFullYear(),
              month: value.getMonth(),
              date: value.getDate(),
            })
          onChange({ value: newDate || new Date(0, 0, 0, 0, 0, 0, 0) })
        }}
      />
      <TimePicker
        label={labelTimePicker}
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
