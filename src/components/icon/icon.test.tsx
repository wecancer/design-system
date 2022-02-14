import Icon, { iconsMap, IconsTypes } from '.'
import { render } from '../../testing'

describe('<Icon />', () => {
  it('should render snapshot correctly', () => {
    const { container } = render(
      <>
        {Object.keys(iconsMap).map((iconName) => (
          <Icon key={iconName} name={iconName as IconsTypes} />
        ))}
        <Icon name="plus" size={20} />
        <Icon name="check" className="someclass" />
      </>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render all icons from library', () => {
    const { container } = render(
      <div className="container">
        {Object.keys(iconsMap).map((iconName) => (
          <Icon key={iconName} name={iconName as IconsTypes} />
        ))}
      </div>,
    )
    const items = container.querySelector('.container')

    expect(items?.children).toHaveLength(Object.keys(iconsMap).length)
  })
})
