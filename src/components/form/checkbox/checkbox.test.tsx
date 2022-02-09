import React from 'react'
import {screen, fireEvent} from '@testing-library/react'
import {render} from '../../../testing'
import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render snapshot correctly', () => {
    const {container} = render(
      <>
        <Checkbox />
        <Checkbox isChecked />
        <Checkbox isDisabled />
        <Checkbox isDisabled isChecked />
        <Checkbox isDisabled isChecked label="I'm checked and disabled" />
        <Checkbox label="I'm available" />
      </>,
    )
    expect(container).toMatchSnapshot()
  })

  it('should render checkbox checked', () => {
    render(<Checkbox isChecked />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox.getAttribute('aria-checked')).toBe('true')
    expect(checkbox.getAttribute('aria-disabled')).toBe('false')
  })

  it('should render checkbox disabled', () => {
    render(<Checkbox isDisabled />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox.getAttribute('aria-checked')).toBe('false')
    expect(checkbox.getAttribute('aria-disabled')).toBe('true')
  })

  it('should render checkbox disabled and checked', () => {
    render(<Checkbox isChecked isDisabled />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox.getAttribute('aria-checked')).toBe('true')
    expect(checkbox.getAttribute('aria-disabled')).toBe('true')
  })

  it('should change checked status from click', () => {
    const handleClick = jest.fn()
    const checked = render(<Checkbox isChecked onChange={handleClick} />)
    const checkedComponent = checked.queryByRole('checkbox') as HTMLElement
    fireEvent.click(checkedComponent)
    expect(handleClick).toHaveBeenCalledTimes(1)

    const unchecked = render(<Checkbox isChecked={false} />)
    const uncheckedComponent = unchecked.container.querySelector(
      '[role="checkbox"]',
    ) as HTMLElement
    expect(uncheckedComponent.getAttribute('aria-checked')).toBe('false')
  })
})
