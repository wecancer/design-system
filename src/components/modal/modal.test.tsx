import Modal from '.'
import { render, fireEvent } from '../../testing'

describe('<Modal />', () => {
  beforeEach(() => {
    if (!document.getElementById('root')) {
      const root = document.createElement('div')
      root.setAttribute('id', 'root')
      document.body.appendChild(root)
    }
  })

  it(`should not render the modal if the attribute "isOpen" is not defined be false or undefined`, () => {
    const { container } = render(
      <>
        <Modal>Something</Modal>
        <Modal isOpen={false}>Something</Modal>
      </>,
    )
    expect(container.querySelector('section header')).not.toBeInstanceOf(
      HTMLHeadingElement,
    )
  })

  it(`should render the modal if the attribute "isOpen" is defined be true`, () => {
    const { container } = render(<Modal>Something</Modal>)
    expect(container.querySelector('section header')).not.toBeInstanceOf(
      HTMLHeadingElement,
    )
  })

  it('should render the title of the modal', () => {
    const title = 'Heading'
    const { queryByText } = render(
      <Modal title={title} isOpen>
        Something
      </Modal>,
    )
    expect(queryByText('Heading')?.textContent).toBe(title)
  })

  it('should render the chiledren elements', () => {
    const { queryByTestId } = render(
      <Modal isOpen>
        <ul data-testid="list">
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </Modal>,
    )
    expect(queryByTestId('list')).toBeInstanceOf(HTMLUListElement)
    expect(queryByTestId('list')?.children).toHaveLength(4)
  })

  it('should handle the click on close modal', () => {
    const handleClick = jest.fn()

    const { baseElement } = render(
      <Modal isOpen onClose={handleClick}>
        Something
      </Modal>,
    )
    const btnClose = baseElement.querySelector(
      'section header button',
    ) as HTMLButtonElement
    fireEvent.click(btnClose)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
