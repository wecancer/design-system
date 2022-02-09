import Dropdown from '.'
import {render, fireEvent} from '../../../testing'

describe('<DropdownPanel />', () => {
  const options = [
    {
      label: 'item 1',
      value: '01',
    },
    {
      label: 'item 2',
      value: '02',
    },
    {
      label: 'item 3',
      value: '03',
    },
  ]

  it('should render snapshot correctly', () => {
    const {container} = render(
      <>
        <Dropdown label="empty options" onChange={() => {}} options={[]} />
        <Dropdown label="with " onChange={() => {}} options={options} />
        <Dropdown
          label="testing"
          onChange={() => {}}
          options={options}
          value={options[0]}
        />
      </>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('must trigger an event of change when the element has been selected', () => {
    const index = 0
    const option = options[index]
    const {queryByText, queryByRole} = render(
      <Dropdown
        label="Click me!"
        onChange={(value) => expect(option).toMatchObject(value.option)}
        options={options}
      />,
    )
    const triggerButton = queryByText('Click me!')
    fireEvent.click(triggerButton as HTMLElement)

    const buttonSelect = queryByRole('listbox')?.querySelectorAll(
      '[role="button"]',
    )[index] as HTMLElement
    fireEvent.click(buttonSelect)
  })

  it('should be use the label of value', () => {
    const option = options[0]
    const {queryByText} = render(
      <Dropdown
        value={option}
        label="Click me!"
        options={options}
        onChange={(value) => expect(option).toMatchObject(value.option)}
      />,
    )

    expect(queryByText('Click me!')).toBeNull()
    expect(queryByText(option.label)).toBeDefined()
  })
})
