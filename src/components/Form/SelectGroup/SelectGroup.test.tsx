import SelectGroup from '.'
import {render, fireEvent} from '../../../testing'

const options = [
  {value: '1', label: 'Item 1'},
  {value: '2', label: 'Item 2'},
  {value: '3', label: 'Item 3'},
  {value: '4', label: 'Item 4'},
]

describe('<SelectGroup />', () => {
  const KEY_DOWN = 40

  it('should have the custom classname', () => {
    const {container} = render(<SelectGroup className="select" options={[]} onChange={() => null} />)
    expect(container.querySelector('.select')).toBeInstanceOf(HTMLElement)
  })

  it('should have an event to change the select value', () => {
    const {container, queryByText} = render(
      <SelectGroup
        options={options}
        className="select"
        onChange={({value}) => expect(value).toMatchObject([options[2]])}
      />,
    )

    const label = container.querySelector('div[class*="-control"]') as HTMLElement

    // Focus and enable the dropdown of options.
    fireEvent.focus(label)
    fireEvent.keyDown(label, {
      keyCode: KEY_DOWN,
    })

    fireEvent.click(queryByText('Item 3') as HTMLElement)
  })

  it('should shows the select value', () => {
    const {queryByText} = render(
      <SelectGroup
        options={options}
        value={[options[1]]}
        className="select"
        onChange={({value}) => expect(value).toMatchObject(options[2])}
      />,
    )

    const value = queryByText(options[1].label) as HTMLElement

    expect(value).toBeInstanceOf(HTMLElement)
  })
})
