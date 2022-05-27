import TimePicker from '.'
import { render, fireEvent } from '../../testing'

describe('<TimePicker />', () => {
  it('should render snapshot correctly', () => {
    const { container } = render(
      <TimePicker
        id="timepicker-id"
        label="timepicker-label"
        value="12:34"
        onChange={() => null}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('should open dropdown when click in TimePicker', () => {
    const { container } = render(<TimePicker value="" onChange={() => null} />)

    fireEvent.click(container)
    const dropdown = container.querySelector('div:last-child')
    expect(dropdown).toBeVisible()
  })

  it('should change hour by keyboard', () => {
    const { container } = render(
      <TimePicker
        value="00:00"
        onChange={({ value }) => {
          expect(value).toBe('10:00')
        }}
      />,
    )
    const inputHour = container.querySelector('#hour') as HTMLElement
    fireEvent.change(inputHour, { target: { value: '10' } })
  })

  it('should change minute by keyboard', () => {
    const { container } = render(
      <TimePicker
        value="00:00"
        onChange={({ value }) => {
          expect(value).toBe('00:50')
        }}
      />,
    )
    const inputMinute = container.querySelector('#minute') as HTMLElement
    fireEvent.change(inputMinute, { target: { value: '50' } })
  })

  it('can not be a negative hour', () => {
    const { container } = render(
      <TimePicker
        value="10:50"
        onChange={({ value }) => {
          expect(value).toBe('00:50')
        }}
      />,
    )
    const inputHour = container.querySelector('#hour') as HTMLElement
    fireEvent.change(inputHour, { target: { value: '-5' } })
  })

  it('can not be an hour bigger than 23', () => {
    const { container } = render(
      <TimePicker
        value="10:00"
        onChange={({ value }) => {
          expect(value).toBe('00:00')
        }}
      />,
    )
    const inputHour = container.querySelector('#hour') as HTMLElement
    fireEvent.change(inputHour, { target: { value: '40' } })
  })

  it('can not be a negative minute', () => {
    const { container } = render(
      <TimePicker
        value="20:50"
        onChange={({ value }) => {
          expect(value).toBe('20:00')
        }}
      />,
    )
    const inputMinute = container.querySelector('#minute') as HTMLElement
    fireEvent.change(inputMinute, { target: { value: '-8' } })
  })

  it('can not be a minute bigger than 23', () => {
    const { container } = render(
      <TimePicker
        value="10:40"
        onChange={({ value }) => {
          expect(value).toBe('10:00')
        }}
      />,
    )
    const inputMinute = container.querySelector('#minute') as HTMLElement
    fireEvent.change(inputMinute, { target: { value: '80' } })
  })

  it('should click on hour cell and get the correct value', () => {
    const { container } = render(
      <TimePicker
        value="09:00"
        onChange={({ value }) => {
          expect(value).toBe('20:00')
        }}
      />,
    )
    const cellHour = container.querySelector('#hour-20') as HTMLElement
    fireEvent.click(cellHour)
  })

  it('should click on minute cell and get the correct value', () => {
    const { container } = render(
      <TimePicker
        value="13:00"
        onChange={({ value }) => {
          expect(value).toBe('13:59')
        }}
      />,
    )
    const cellMinute = container.querySelector('#minute-59') as HTMLElement
    fireEvent.click(cellMinute)
  })
})
