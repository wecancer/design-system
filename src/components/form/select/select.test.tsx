import Select from '.'
import { render, fireEvent } from '../../../testing'

const options = [
  { value: '1', label: 'Item 1' },
  { value: '2', label: 'Item 2' },
  { value: '3', label: 'Item 3' },
  { value: '4', label: 'Item 4' },
]

describe('<Select />', () => {
  const KEY_DOWN = 40

  it('should have the select label', () => {
    const { queryByText } = render(
      <Select label="Select it!" value="" options={[]} onChange={() => null} />,
    )
    const placeholder = queryByText('Select it!')
    expect(placeholder).toBeInstanceOf(HTMLElement)
  })

  it('should open the menu when it is focus', () => {
    const { queryByText, container } = render(
      <Select
        options={options}
        label="Select label"
        value={options[1].value}
        onFocus={() => {
          expect(
            container.querySelector('#react-select-2-listbox'),
          ).toBeInTheDocument()
        }}
        onChange={() => null}
      />,
    )

    const label = queryByText('Select label') as HTMLElement
    fireEvent.click(label)
  })

  it('should have the custom classname', () => {
    const { container } = render(
      <Select className="select" options={[]} value="" onChange={() => null} />,
    )
    expect(container.querySelector('.select')).toBeInstanceOf(HTMLElement)
  })

  it('should have an event to change the select value', () => {
    const { getByText, container } = render(
      <Select
        value=""
        label="Select..."
        options={options}
        className="select"
        onChange={({ value, option }) => {
          expect(value).toBe(options[2].value)
          expect(option).toMatchObject(options[2])
        }}
      />,
    )

    const label = container.querySelector(
      'div[class*="-control"]',
    ) as HTMLElement

    // Focus and enable the dropdown of options.
    fireEvent.focus(label)
    fireEvent.keyDown(label, {
      keyCode: KEY_DOWN,
    })

    fireEvent.click(getByText('Item 3') as HTMLElement)
  })

  it('should shows the select value', () => {
    const { queryByText } = render(
      <Select
        options={options}
        className="select"
        value={options[1].value}
        onChange={({ value, option }) => {
          expect(value).toBe(options[2].value)
          expect(option).toMatchObject(options[2])
        }}
      />,
    )

    const value = queryByText(options[1].label) as HTMLElement

    expect(value).toBeInstanceOf(HTMLElement)
  })

  it('should contains input with required attribute', () => {
    const { container } = render(
      <Select
        required
        options={options}
        className="select"
        value={options[1].value}
        onChange={({ value, option }) => {
          expect(value).toBe(options[2].value)
          expect(option).toMatchObject(options[2])
        }}
      />,
    )
    const input = container.querySelector('input[name="hidded-input"]')

    expect(input).toHaveAttribute('required')
    expect(input).toBeInstanceOf(HTMLElement)
    expect(input).toHaveAttribute('value', options[1].value)
  })

  it('should contains select without required', () => {
    const { container } = render(
      <Select
        options={options}
        className="select"
        value={options[1].value}
        onChange={({ value, option }) => {
          expect(value).toBe(options[2].value)
          expect(option).toMatchObject(options[2])
        }}
      />,
    )
    const input = container.querySelector('input[name="hidded-input"]')
    expect(input).toBeNull()
  })
})
