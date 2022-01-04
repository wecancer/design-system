import React from 'react'

import Button from '.'
import {render, fireEvent} from '../../testing'

const btnText = 'Click me!'

describe('<Button />', () => {
  it('should render snapshot correctly', () => {
    const {container} = render(
      <>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button isLoading>Loading content!</Button>
        <Button isDisabled>Button disabled</Button>
      </>,
    )
    expect(container).toMatchSnapshot()
  })

  it('should render the component with text children', () => {
    const {queryByText} = render(<Button>Click me!</Button>)
    expect(queryByText('Click me!')).toBeInstanceOf(HTMLButtonElement)
  })

  it('should add the className in button component', () => {
    const {container} = render(<Button className="customClass">Custom class name</Button>)
    expect(container.querySelector('.customClass')).toBeInstanceOf(HTMLButtonElement)
  })

  it('should receive the isDisabled attribute', () => {
    const {queryByText} = render(<Button isDisabled>{btnText}</Button>)
    expect(queryByText(btnText)).toBeDisabled()
  })

  it('should receive the isLoading attribute', () => {
    const {container} = render(<Button isLoading>Something!</Button>)
    expect(container.querySelector('[data-icon-name="spinnerSolid"]')).toBeDefined()
  })

  it('should receive the onChange attribute', () => {
    const handleClick = jest.fn()
    const {queryByText} = render(<Button onClick={handleClick}>{btnText}</Button>)
    const btnElement = queryByText(btnText)

    if (!btnElement) throw new Error(`Can't find the button with the text "${btnText}"`)

    fireEvent.click(btnElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
