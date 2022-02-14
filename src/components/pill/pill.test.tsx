import Pill from '.'
import { render, fireEvent } from '../../testing'

describe('Pill Component', () => {
  it('should render basic Pill Component correctly', () => {
    const { container } = render(
      <>
        <Pill label="test" />
        <Pill label="test actived" isActive />
      </>,
    )
    expect(container).toMatchSnapshot()
  })

  it('should render icons of Pill Component correctly', () => {
    const { container } = render(
      <>
        <Pill label="has closed" hasClose />
        <Pill label="checked" isChecked />
        <Pill label="checked and has closed" hasClose isChecked />
      </>,
    )
    expect(container).toMatchSnapshot()
  })

  it('should render checked and activied Pill Component correctly', () => {
    let item = 'none'
    const { container } = render(
      <Pill
        label="test"
        onClick={() => {
          item = 'clicked'
        }}
      />,
    )
    fireEvent.click(container.firstChild as HTMLElement)
    expect(item).toBe('clicked')
  })
})
