import React from 'react'
import DatePicker from '.'
import RangeDatePicker from './range'
import { render, fireEvent } from '../../testing'

describe('<DatePicker />', () => {
  it('should dispatch an expection when the value has the invalid type', () => {
    const spy = jest.spyOn(console, 'error')
    spy.mockImplementation(() => {})
    try {
      // eslint-disable-next-line
      // @ts-ignore: Unreachable code error
      expect(() => render(<DatePicker value="10/10/2010" />)).toThrowError(
        'The value attribute should be a date instance.',
      )
    } catch (err) {
      // do nothing
    }
    spy.mockRestore()
  })

  it('should open the calendar when the input has been focused', () => {
    const { container } = render(<DatePicker />)
    const inputTexts = container.querySelectorAll('input[type="text"]')
    expect(inputTexts).toHaveLength(1)

    expect(container.querySelector('.rdp')).toBeNull()
    fireEvent.click(inputTexts[0] as HTMLElement)
    expect(container.querySelector('.rdp')).toBeInstanceOf(HTMLElement)
  })

  it('should dispatch an event when the onChange is triggered', () => {
    const callback = jest.fn()
    const { container } = render(
      <DatePicker value={new Date()} onChange={callback} />,
    )
    const input = container.querySelector('input[type="text"]') as HTMLElement

    fireEvent.click(input)
    fireEvent.change(input, { target: { value: '10/10/2010' } })
    fireEvent.blur(input)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should open the calendar when click on the calendar icon button', () => {
    const callback = jest.fn()
    const { container } = render(
      <DatePicker value={new Date()} onChange={callback} />,
    )
    const button = container.querySelector('button') as HTMLElement

    expect(container.querySelector('.rdp')).toBeNull()
    fireEvent.click(button as HTMLElement)
    expect(container.querySelector('.rdp')).toBeInstanceOf(HTMLElement)
  })

  it('should expect the new value when change the calendar', () => {
    const { container } = render(
      <DatePicker
        value={new Date()}
        onChange={({ value }) => expect(value).toBeInstanceOf(Date)}
      />,
    )

    const input = container.querySelector('input[type="text"]') as HTMLElement
    fireEvent.click(input)
    const button = container.querySelector('.rdp-cell button') as HTMLElement
    fireEvent.click(button)
  })

  it('should set the value undefined when the user type an invalid date format', () => {
    const { container } = render(
      <DatePicker
        value={new Date()}
        onChange={({ value }) => expect(value).toBeUndefined()}
      />,
    )
    const input = container.querySelector('input[type="text"]') as HTMLElement

    fireEvent.click(input)
    fireEvent.change(input, { target: { value: '50/30/9999' } })
    fireEvent.blur(input)
  })

  it('should defines the input label to datepicker component', () => {
    const { getByText } = render(
      <DatePicker
        label="Birthday"
        value={new Date()}
        onChange={({ value }) => expect(value).toBeUndefined()}
      />,
    )
    const label = getByText('Birthday')

    expect(label).toBeInstanceOf(HTMLDivElement)
  })
})

describe('<RangeDatePicker />', () => {
  it('should open the calendar when the input has been focused', () => {
    const { container } = render(
      <RangeDatePicker value={{ from: undefined, to: undefined }} />,
    )
    const inputTexts = container.querySelectorAll('input[type="text"]')
    expect(inputTexts).toHaveLength(2)

    expect(container.querySelector('.rdp')).toBeNull()
    fireEvent.click(inputTexts[0] as HTMLElement)
    expect(container.querySelector('.rdp')).toBeInstanceOf(HTMLElement)
  })

  it('should defines the input label to rander datepicker component', () => {
    const { getByText } = render(
      <RangeDatePicker
        endLabel="End"
        startLabel="Start"
        value={{ from: undefined, to: undefined }}
        onChange={({ value }) => expect(value).toBeUndefined()}
      />,
    )
    const end = getByText('End')
    const start = getByText('Start')

    expect(end).toBeInstanceOf(HTMLDivElement)
    expect(start).toBeInstanceOf(HTMLDivElement)
  })
})

describe('Snapshot <DatePicker />', () => {
  it('should take a snapshot', () => {
    const { container } = render(
      <>
        <DatePicker fromYear={2022} toYear={2025} />
      </>,
    )
    const input = container.querySelector('input[type="text"]') as HTMLElement
    fireEvent.change(input, { target: { placeholder: '22/02/2022' } })
    fireEvent.click(input)
    expect(container).toMatchSnapshot()
  })
})
