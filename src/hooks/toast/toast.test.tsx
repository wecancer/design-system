import useToast from '.'
import {render, fireEvent, act} from '../../testing'

type ToastWrapperProps = {
  message: string
  delay?: number
}

const ToastWrapper = ({message, delay}: ToastWrapperProps) => {
  const toast = useToast()
  return (
    <button
      type="button"
      data-testid="button"
      onClick={() => toast(message, {delay})}
    >
      Click me!
    </button>
  )
}

const ToastSuccessWrapper = ({message}: ToastWrapperProps) => {
  const toast = useToast()
  return (
    <button
      type="button"
      data-testid="button"
      onClick={() => toast.success(message)}
    >
      Click me!
    </button>
  )
}

const ToastErrorWrapper = ({message}: ToastWrapperProps) => {
  const toast = useToast()
  return (
    <button
      type="button"
      data-testid="button"
      onClick={() => toast.error(message)}
    >
      Click me!
    </button>
  )
}

describe('useToast', () => {
  it('should open the success toast', () => {
    const {queryByTestId, queryByText} = render(
      <ToastWrapper message="Hello!" />,
    )

    const button = queryByTestId('button')

    if (!button) throw new Error('Element with testid "button" not found.')

    fireEvent.click(button)

    expect(queryByText('Hello!')).toBeInstanceOf(HTMLElement)
  })

  it('should have delay property to configure the timeout of the toast', () => {
    jest.useFakeTimers()

    const {queryByTestId, queryByText} = render(
      <ToastWrapper message="Hello!" />,
    )

    const button = queryByTestId('button')

    if (!button) throw new Error('Element with testid "button" not found.')

    fireEvent.click(button)
    expect(queryByText('Hello!')).toBeInstanceOf(HTMLElement)

    act(() => {
      jest.advanceTimersByTime(550)
    })

    expect(queryByText('Hello!')).toBeNull()
  })

  it('should remove the toast when click the close button from toast', () => {
    jest.useFakeTimers()

    const {queryByTestId, queryByText} = render(
      <ToastWrapper message="Hello!" />,
    )

    const button = queryByTestId('button')

    if (!button) throw new Error('Element with testid "button" not found.')

    fireEvent.click(button)
    const messageContainer = queryByText('Hello!') as HTMLElement
    expect(queryByText('Hello!')).toBeInstanceOf(HTMLElement)

    const closeButton = messageContainer.parentNode?.querySelector(
      'button',
    ) as HTMLElement
    fireEvent.click(closeButton)
    expect(queryByText('Hello!')).not.toBeInstanceOf(HTMLElement)
  })

  it('should render the success toast', () => {
    const {queryByTestId, queryByText} = render(
      <ToastSuccessWrapper message="Success!" />,
    )

    const button = queryByTestId('button')

    if (!button) throw new Error('Element with testid "button" not found.')

    fireEvent.click(button)

    expect(queryByText('Success!')).toBeInstanceOf(HTMLElement)
  })

  it('should render the error toast', () => {
    const {queryByTestId, queryByText} = render(
      <ToastErrorWrapper message="Error!" />,
    )

    const button = queryByTestId('button')

    if (!button) throw new Error('Element with testid "button" not found.')

    fireEvent.click(button)

    expect(queryByText('Error!')).toBeInstanceOf(HTMLElement)
  })
})
