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
      <Select label="Select it!" options={[]} onChange={() => null} />,
    )
    const placeholder = queryByText('Select it!')
    expect(placeholder).toBeInstanceOf(HTMLElement)
  })

  it('should have the custom classname', () => {
    const { container } = render(
      <Select className="select" options={[]} onChange={() => null} />,
    )
    expect(container.querySelector('.select')).toBeInstanceOf(HTMLElement)
  })

  it('should have an event to change the select value', () => {
    const { getByText, container } = render(
      <Select
        label="Select..."
        options={options}
        className="select"
        onChange={({ value }) => expect(value).toMatchObject(options[2])}
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
        value={options[1]}
        className="select"
        onChange={({ value }) => expect(value).toMatchObject(options[2])}
      />,
    )

    const value = queryByText(options[1].label) as HTMLElement

    expect(value).toBeInstanceOf(HTMLElement)
  })

  it('should contains input with required attribute', () => {
    const { container } = render(
      <Select
        options={options}
        className="select"
        required
        onChange={({ value }) => expect(value).toMatchObject(options[2])}
      />,
    )
    const input = container.querySelector('input[name="hidded-input"]')

    expect(input).toHaveAttribute('required')
    expect(input).toBeInstanceOf(HTMLElement)
  })

  it('should contains input with required attribute and dont trigger html5 validation', () => {
    const { container } = render(
      <Select
        options={options}
        value={options[1]}
        required
        className="select"
        onChange={({ value }) => expect(value).toMatchObject(options[2])}
      />,
    )
    const input = container.querySelector('input[name="hidded-input"]')

    expect(input).toHaveAttribute('required')
    expect(input).toHaveAttribute('value', options[1].value)
  })
})
