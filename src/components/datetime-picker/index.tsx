import React from 'react'
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
  datetime: Date
  labelDatePicker?: string
  labelTimePicker?: string
  onChange(params: OnChangeParams): void
}

const DateTimePicker = ({
  datetime,
  onChange,
  labelDatePicker,
  labelTimePicker,
}: Props) => (
  <Container>
    <DatePicker
      label={labelDatePicker}
      value={datetime}
      onChange={({ value }) => {
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
      value={`${datetime.getHours()}:${datetime.getMinutes()}`}
      onChange={({ value }) => {
        const [hours, minutes] = value.split(':')
        const newDate = set(datetime, { hours: +hours, minutes: +minutes })
        onChange({ value: newDate })
      }}
    />
  </Container>
)

export default DateTimePicker
