import Pagination from '.'
import { render, fireEvent } from '../../testing'

describe('<Pagination />', () => {
  it("should be shorter and don't contains next page button", () => {
    const { container } = render(
      <Pagination amount={5} onPaginate={() => null} currentPage={1} />,
    )
    const nextButton = container.querySelector('[data-icon-name]')
    expect(container).toHaveTextContent('5')
    expect(nextButton).not.toBeInstanceOf(HTMLElement)
  })

  it('should be bigger and contains next button', () => {
    const { container } = render(
      <Pagination amount={10} onPaginate={() => null} currentPage={1} />,
    )
    const nextButton = container.querySelector('[data-icon-name]')
    expect(nextButton).toBeInstanceOf(HTMLElement)
  })

  it('should have a current button selected', () => {
    const { getByText } = render(
      <Pagination amount={5} onPaginate={() => null} currentPage={1} />,
    )
    const currentButton = getByText('1')
    expect(currentButton).toHaveAttribute('aria-current', 'true')
  })

  it('should paginate to the next page when the next button is clicked', () => {
    const { container } = render(
      <Pagination
        amount={10}
        currentPage={1}
        onPaginate={({ page }) => expect(page).toBe(2)}
      />,
    )
    const nextButton = container.querySelector('[data-icon-name="arrowRight"]')
      ?.parentNode as HTMLElement

    fireEvent.click(nextButton)
  })

  it('should paginate to the previous page when the previous button is clicked', () => {
    const { container } = render(
      <Pagination
        amount={10}
        currentPage={5}
        onPaginate={({ page }) => expect(page).toBe(4)}
      />,
    )
    const nextButton = container.querySelector('[data-icon-name="arrowLeft"]')
      ?.parentNode as HTMLElement

    fireEvent.click(nextButton)
  })

  it('should paginate when the button item is clicked', () => {
    const { getByText } = render(
      <Pagination
        amount={10}
        currentPage={5}
        onPaginate={({ page }) => expect(page).toBe(3)}
      />,
    )

    fireEvent.click(getByText('3'))
  })
})
