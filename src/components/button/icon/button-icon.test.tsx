import ButtonIcon from '.'
import { render, fireEvent } from '../../../testing'

describe('<ButtonIcon />', () => {
  it('should render snapshot correctly', () => {
    const { container } = render(
      <>
        <ButtonIcon icon="search" />
        <ButtonIcon color="error" icon="minus" />
        <ButtonIcon title="title test" icon="view" />
        <ButtonIcon title="title test" icon="view" isDisabled />
        <ButtonIcon icon="view" isLoading />
      </>,
    )
    expect(container).toMatchSnapshot()
  })

  it('should add the className in button component', () => {
    const { container } = render(
      <ButtonIcon className="customClass" icon="check" />,
    )
    expect(container.querySelector('.customClass')).toBeInstanceOf(
      HTMLButtonElement,
    )
  })

  it('should receive the isDisabled attribute', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <ButtonIcon icon="check" onClick={handleClick} isDisabled />,
    )
    const btnElement = container.querySelector('button')

    if (!btnElement) throw new Error("Can't find the icon button")

    fireEvent.click(btnElement)
    expect(handleClick).toHaveBeenCalledTimes(0)
  })

  it('should receive the isLoading attribute', () => {
    const { container } = render(<ButtonIcon icon="check" isLoading />)
    expect(
      container.querySelector('[data-icon-name="spinnerSolid"]'),
    ).toBeDefined()
  })

  it('should receive the onChange attribute', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <ButtonIcon icon="check" onClick={handleClick} />,
    )
    const btnElement = container.querySelector('button')

    if (!btnElement) throw new Error("Can't find the icon button")

    fireEvent.click(btnElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
