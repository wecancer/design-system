import Radio from '.'
import {render, screen, fireEvent} from '../../../testing'

describe('<Radio />', () => {
  it('should render snapshot correctly', () => {
    const {container} = render(
      <>
        <Radio />
        <Radio isChecked />
        <Radio isDisabled />
        <Radio isDisabled isChecked />
        <Radio isDisabled isChecked label="I'm checked and disabled" />
        <Radio label="I'm available" />
      </>,
    )
    expect(container).toMatchSnapshot()
  })

  it('should render radio checked', () => {
    render(<Radio isChecked />)
    const radio = screen.getByRole('radio')
    expect(radio.getAttribute('aria-checked')).toBe('true')
    expect(radio.getAttribute('aria-disabled')).toBe('false')
  })

  it('should render radio disabled', () => {
    render(<Radio isDisabled />)
    const radio = screen.getByRole('radio')
    expect(radio.getAttribute('aria-checked')).toBe('false')
    expect(radio.getAttribute('aria-disabled')).toBe('true')
  })

  it('should render radio disabled and checked', () => {
    render(<Radio isChecked isDisabled />)
    const radio = screen.getByRole('radio')
    expect(radio.getAttribute('aria-checked')).toBe('true')
    expect(radio.getAttribute('aria-disabled')).toBe('true')
  })

  it('should change checked status from click', () => {
    const handleClick = jest.fn()
    const checked = render(<Radio isChecked onChange={handleClick} />)
    const checkedComponent = checked.queryByRole('radio') as HTMLElement
    fireEvent.click(checkedComponent)
    expect(handleClick).toHaveBeenCalledTimes(1)

    const unchecked = render(<Radio isChecked={false} />)
    const uncheckedComponent = unchecked.container.querySelector('[role="radio"]') as HTMLElement
    expect(uncheckedComponent.getAttribute('aria-checked')).toBe('false')
  })
})
