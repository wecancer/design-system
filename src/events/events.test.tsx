import {keyActionClick} from '.'
import {render, fireEvent} from '../testing'

const ENTER = 13
const SPACE = 32

describe('/events', () => {
  it('should be call the actions keys', () => {
    const handle = jest.fn()
    const {queryByTestId} = render(<input data-testid="input" onKeyDown={(e) => keyActionClick(e, handle)} />)
    const input = queryByTestId('input') as HTMLInputElement
    fireEvent.keyDown(input, {
      keyCode: ENTER,
    })
    fireEvent.keyDown(input, {
      keyCode: SPACE,
    })
    expect(handle).toHaveBeenCalledTimes(2)

    new Array(200).fill(null).forEach(
      (el, index) =>
        ![ENTER, SPACE].includes(index) &&
        fireEvent.keyDown(input, {
          keyCode: index,
        }),
    )

    expect(handle).toHaveBeenCalledTimes(2)
  })
})
