import DateTimePicker from '.'
import { render, fireEvent } from '../../testing'

describe('<DateTimePicker />', () => {
  it('should render snapshot correctly', () => {
    const { container } = render(
      <>
        <DateTimePicker
          datetime={new Date(0, 0, 0, 0, 0)}
          onChange={() => null}
        />
      </>,
    )
    fireEvent.click(container)
    expect(container).toMatchSnapshot()
  })
})
