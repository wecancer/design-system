import Dropdown from '.'
import { render, fireEvent } from '../../../testing'

describe('<DropdownPanel />', () => {
  const options = [
    {
      label: 'item 1',
      id: '01',
    },
    {
      label: 'item 2',
      id: '02',
    },
    {
      label: 'item 3',
      id: '03',
    },
  ]

  it('should render snapshot correctly', () => {
    const { container } = render(
      <>
        <Dropdown label="empty options" items={[]} />
        <Dropdown label="with " items={options} />
      </>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should open the options when the lavel is clicked', () => {
    const { getByText, getByRole } = render(
      <Dropdown label="my label" items={options} />,
    )
    const label = getByText('my label')

    fireEvent.click(label)
    expect(getByRole('listbox')).toBeInstanceOf(HTMLElement)
  })
})
