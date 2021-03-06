import { render, fireEvent } from '../../../testing'

import Input from './input'
import InputText from './text'
import InputPassword from './password'
import InputSearch from './search'

describe('<Input />', () => {
  it('should render input with text type', () => {
    const { container } = render(<InputText value="" onChange={() => null} />)
    expect(container.querySelector('input[type="text"]')).toBeInstanceOf(
      HTMLInputElement,
    )
  })

  it('should render input with password type', () => {
    const { container } = render(
      <InputPassword value="" onChange={() => null} />,
    )
    expect(container.querySelector('input[type="password"]')).toBeInstanceOf(
      HTMLInputElement,
    )
  })

  it('should render input with search type', () => {
    const { container } = render(<InputSearch value="" onChange={() => null} />)
    expect(container.querySelector('input[type="search"]')).toBeInstanceOf(
      HTMLInputElement,
    )
  })

  it('should render input search with search icon and clear search button', () => {
    const { container } = render(<InputSearch value="" onChange={() => null} />)
    const searchIcon = container.querySelector('[data-icon-name="search"]')
    const closeButton = container.querySelector(
      '[data-icon-name="close"]',
    )?.parentNode

    expect(closeButton).toBeInstanceOf(HTMLButtonElement)
    expect(searchIcon).toBeInstanceOf(HTMLElement)
  })

  it('should have an onChange event on component input', () => {
    const { container } = render(
      <Input
        value=""
        type="text"
        onChange={({ value, event }) => {
          expect(value).toBe('123')
          expect(event?.currentTarget.value).toBe('123')
        }}
      />,
    )
    const input = container.querySelector('input') as HTMLElement
    fireEvent.change(input, { target: { value: '123' } })
  })

  it('should have a button to show the password if the user want', () => {
    const { container } = render(
      <InputPassword
        value=""
        onChange={({ value }) => expect(value).toBe('pwd')}
      />,
    )
    const buttonShowPwd = container.querySelector('.icon-right')
      ?.parentNode as HTMLButtonElement
    const input = container.querySelector('input') as HTMLElement
    fireEvent.change(input, { target: { value: 'pwd' } })

    const iconUnview = container.querySelector('[data-icon-name="unview"]')
    expect(iconUnview).toBeInstanceOf(HTMLElement)

    expect(input).toHaveAttribute('type', 'password')
    fireEvent.click(buttonShowPwd)
    expect(input).toHaveAttribute('type', 'text')

    const iconView = container.querySelector('[data-icon-name="view"]')
    expect(iconView).toBeInstanceOf(HTMLElement)
  })

  it('should have a button to clear the input if the user want', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <InputSearch value="" onChange={() => null} onClear={handleClick} />,
    )
    const buttonClear = container.querySelector('.icon-right')
      ?.parentNode as HTMLButtonElement

    fireEvent.click(buttonClear)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should focus on input when the label is clicked', () => {
    const { container, getByText, baseElement } = render(
      <Input
        value=""
        id="input"
        type="text"
        label="Label text"
        onChange={() => null}
      />,
    )

    const LabelItem = getByText('Label text')
    fireEvent.click(LabelItem)

    expect(
      baseElement.ownerDocument.activeElement ===
        container.querySelector('#input'),
    ).toBeTruthy()
  })
})
