import { render, fireEvent } from '../../../testing'

import Textarea from '.'

describe('<Textarea />', () => {
  it('should render snapshot correctly', () => {
    const { container } = render(
      <>
        <Textarea
          value="Text message"
          label="Text label"
          onChange={() => null}
        />
        <Textarea
          value="Text message"
          label="Text label"
          onChange={() => null}
          rows={4}
        />
        <Textarea
          infoType="error"
          label="error label"
          value="error message"
          infoMessage="error message"
          onChange={() => null}
        />
        <Textarea
          infoType="success"
          label="success label"
          value="success message"
          infoMessage="success message"
          onChange={() => null}
        />
        <Textarea
          infoType="caption"
          label="caption label"
          value="caption message"
          infoMessage="caption message"
          onChange={() => null}
        />
      </>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have a button to clear the textarea if the user want', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Textarea
        value="Testing message..."
        onChange={() => null}
        onClear={handleClick}
      />,
    )
    const buttonClear = container.querySelector('[data-icon-name="times"]')
      ?.parentNode as HTMLButtonElement

    fireEvent.click(buttonClear)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should have an onChange event on component textarea', () => {
    const { container } = render(
      <Textarea
        value=""
        onChange={({ value, event }) => {
          expect(value).toBe('testing change...')
          expect(event?.currentTarget.value).toBe('testing change...')
        }}
      />,
    )
    const textarea = container.querySelector('textarea') as HTMLElement
    fireEvent.change(textarea, { target: { value: 'testing change...' } })
  })
})
