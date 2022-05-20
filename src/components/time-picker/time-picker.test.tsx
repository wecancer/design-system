import TimePicker from '.'
import { render, fireEvent } from '../../testing'

describe('<TimePicker />', () => {
  it('should render snapshot correctly', () => {
    const { container } = render(
      <>
        <TimePicker value="" onChange={() => null} />
      </>,
    )
    fireEvent.click(container)
    expect(container).toMatchSnapshot()
  })
})
