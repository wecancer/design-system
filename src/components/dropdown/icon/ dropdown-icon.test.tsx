import Dropdown from '.'
import { render, fireEvent } from '../../../testing'

describe('<DropdownIcon />', () => {
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
        <Dropdown icon="more" items={[]} />
        <Dropdown icon="more" items={options} />
      </>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should open the options when the lavel is clicked', () => {
    const { getByRole, container } = render(
      <Dropdown icon="moreVert" items={options} />,
    )
    const icon = container.querySelector('*[data-icon-name="moreVert"]')

    if (!icon) throw new Error(`Can't find the button with the text "my label"`)

    fireEvent.click(icon)
    expect(getByRole('listbox')).toBeInstanceOf(HTMLElement)
  })
})
