import Icon from '.'
import { render } from '../../testing'

describe('<Icon />', () => {
  it('should render snapshot correctly', () => {
    const { container } = render(
      <>
        <Icon name="arrowLeft" />
        <Icon name="check" />
        <Icon name="close" />
        <Icon name="minus" />
        <Icon name="plus" />
        <Icon name="plus" size={20} />
        <Icon name="check" className="someclass" />
      </>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
