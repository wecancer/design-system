import Tooltip from '.'
import {render, fireEvent} from '../../testing'

describe('<Tooltip />', () => {
  it('should render snapshot correctly', () => {
    const {container} = render(
      <>
        <Tooltip>
          <button type="button">hover me</button>
        </Tooltip>
        <Tooltip tooltip="testing...">
          <button type="button">hover me</button>
        </Tooltip>
        <Tooltip tooltip="top tooltip text" position="top">
          <button type="button">tooltip top</button>
        </Tooltip>
        <Tooltip tooltip="bottom tooltip text" position="bottom">
          <button type="button">tooltip bottom</button>
        </Tooltip>
        <Tooltip tooltip="left tooltip text" position="left">
          <button type="button">tooltip left</button>
        </Tooltip>
        <Tooltip tooltip="right tooltip text" position="right">
          <button type="button">tooltip right</button>
        </Tooltip>
      </>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should shows the tooltip when the mouse hover on element', () => {
    const {queryByTestId, container} = render(
      <Tooltip tooltip="tooltip testing...">
        <button type="button" data-testid="hover-me">
          button tooltip
        </button>
      </Tooltip>,
    )

    const hoverElement = queryByTestId('hover-me')
    fireEvent.mouseOver(hoverElement as HTMLElement)

    const tooltipContainer = container.querySelector('[role="tooltip"]')
    expect(tooltipContainer).toBeInstanceOf(HTMLElement)
  })
})
