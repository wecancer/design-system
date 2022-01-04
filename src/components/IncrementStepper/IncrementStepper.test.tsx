import IncrementStepper from '.'
import {render, fireEvent} from '../../testing'

describe('<IncrementStepper />', () => {
  it('should render snapshot correctly', () => {
    const {container} = render(
      <>
        <IncrementStepper value={10} onChange={() => null} />
      </>,
    )
    expect(container).toMatchSnapshot()
  })

  it('should increment the value when the button is clicked', () => {
    const {container} = render(<IncrementStepper value={10} onChange={({value}) => expect(value).toBe(11)} />)
    const button = container.querySelector('button:last-child')

    if (!button) throw new Error('Last button not found')

    fireEvent.click(button)
  })

  it('should decrement the value when the button is clicked', () => {
    const {container} = render(<IncrementStepper value={10} onChange={({value}) => expect(value).toBe(9)} />)
    const button = container.querySelector('button:first-child')

    if (!button) throw new Error('First button not found')

    fireEvent.click(button)
  })

  it('should disable the increment button when the max value is defined', () => {
    const {container} = render(<IncrementStepper value={10} max={10} onChange={() => null} />)
    const button = container.querySelector('button:last-child')

    if (!button) throw new Error('Last button not found')

    expect(button).toBeDisabled()
  })

  it('should disable the decrement button when the max value is defined', () => {
    const {container} = render(<IncrementStepper value={10} min={10} onChange={() => null} />)
    const button = container.querySelector('button:first-child')

    if (!button) throw new Error('First button not found')

    expect(button).toBeDisabled()
  })

  it('should disable the controls', () => {
    const {container} = render(<IncrementStepper isDisabled value={0} min={-10} max={30} onChange={() => null} />)
    const btnFirst = container.querySelector('button:first-child')
    const btnLast = container.querySelector('button:last-child')
    const input = container.querySelector('input')

    if (!btnFirst) throw new Error('First button not found')
    if (!btnLast) throw new Error('Last button not found')
    if (!input) throw new Error('Last button not found')

    expect(btnFirst).toBeDisabled()
    expect(btnLast).toBeDisabled()
    expect(input).toBeDisabled()
  })
})
