import Dropdown from '.'
import { render, fireEvent } from '../../testing'

describe('<Dropdown />', () => {
  it('should render snapshot correctly', () => {
    const { container } = render(
      <Dropdown
        className="custom-classname"
        trigger={() => <button type="button">Click me!</button>}
      >
        {() => <p>element hide</p>}
      </Dropdown>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be show dropdown options when the trigger as clicked', () => {
    const { queryByTestId } = render(
      <Dropdown
        className="testing"
        trigger={({ handleToggle }) => (
          <button data-testid="trigger" type="button" onClick={handleToggle}>
            Click me!
          </button>
        )}
      >
        {({ handleClose }) => (
          <div data-testid="container">
            <button data-testid="op1" type="button">
              Option 1
            </button>
            <button data-testid="op2" type="button" onClick={handleClose}>
              Option 2
            </button>
            <button data-testid="op3" type="button">
              Option 3
            </button>
          </div>
        )}
      </Dropdown>,
    )
    const triggerButton = queryByTestId('trigger')
    fireEvent.click(triggerButton as HTMLElement)

    const option2 = queryByTestId('op2')

    expect(queryByTestId('container')).toBeDefined()
    fireEvent.click(option2 as HTMLElement)
    expect(queryByTestId('container')).toBeNull()
  })

  it('should be toggle the dropdown options when the trigger as clicked', () => {
    const { queryByTestId } = render(
      <Dropdown
        className="testing"
        trigger={({ handleToggle }) => (
          <button data-testid="trigger" type="button" onClick={handleToggle}>
            Click me!
          </button>
        )}
      >
        {({ handleClose }) => (
          <div data-testid="container">
            <button data-testid="op1" type="button">
              Option 1
            </button>
            <button data-testid="op2" type="button" onClick={handleClose}>
              Option 2
            </button>
            <button data-testid="op3" type="button">
              Option 3
            </button>
          </div>
        )}
      </Dropdown>,
    )

    const tiggerButton = queryByTestId('trigger') as HTMLElement

    fireEvent.click(tiggerButton)
    expect(queryByTestId('container')).toBeDefined()

    fireEvent.click(tiggerButton)
    expect(queryByTestId('container')).toBeNull()
  })
})
