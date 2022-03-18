import Pagination from '.'
import { render } from '../../testing'

describe('<Pagination />', () => {
  it("should be shorter and don't contains next page button", () => {
    const { container } = render(
      <Pagination amount={5} onPaginate={() => null} currentPage={1} />,
    )
    const nextButton = container.querySelector('button[name="icon"]')
    expect(container).toHaveTextContent('5')
    expect(nextButton).not.toBeInstanceOf(HTMLElement)
  })

  it('should be bigger and contains next button', () => {
    const { container } = render(
      <Pagination amount={10} onPaginate={() => null} currentPage={1} />,
    )
    const nextButton = container.querySelector('button[name="icon"]')
    expect(nextButton).toBeInstanceOf(HTMLElement)
  })

  it('should have a current button selected', () => {
    const { getByText } = render(
      <Pagination amount={5} onPaginate={() => null} currentPage={1} />,
    )
    const currentButton = getByText('1')
    expect(currentButton).toHaveStyle('background-color: #0080eb')
  })
})
