import RadioGroup from './Group'
import {render, fireEvent} from '../../../testing'

describe('<RadioGroup />', () => {
  it('should render snapshot correctly', () => {
    const {container} = render(
      <>
        <RadioGroup
          line="column"
          items={[
            {
              id: '1',
              isChecked: false,
              label: 'Item unchecked',
              isDisabled: false,
            },
            {
              id: '2',
              isChecked: true,
              label: 'Item checked',
              isDisabled: false,
            },
            {
              id: '3',
              isChecked: true,
              label: 'Item checked disabled',
              isDisabled: true,
            },
            {
              id: '4',
              isChecked: false,
              label: 'Item unchecked disabled',
              isDisabled: true,
            },
          ]}
        />
        <RadioGroup
          line="column"
          items={[
            {
              id: '1',
              isChecked: false,
              label: 'Item unchecked',
              isDisabled: false,
            },
            {
              id: '2',
              isChecked: true,
              label: 'Item checked',
              isDisabled: false,
            },
          ]}
        />
        <RadioGroup
          line="row"
          items={[
            {
              id: '1',
              isChecked: false,
              label: 'Item unchecked',
              isDisabled: false,
            },
            {
              id: '2',
              isChecked: true,
              label: 'Item checked',
              isDisabled: false,
            },
          ]}
        />
      </>,
    )
    expect(container).toMatchSnapshot()
  })

  it('should render all radio group disabled', () => {
    const items = [
      {id: '1', isChecked: false, label: 'Item unchecked', isDisabled: false},
      {id: '2', isChecked: true, label: 'Item checked', isDisabled: false},
      {
        id: '3',
        isChecked: true,
        label: 'Item checked disabled',
        isDisabled: true,
      },
      {
        id: '4',
        isChecked: false,
        label: 'Item unchecked disabled',
        isDisabled: false,
      },
    ]
    const {getAllByRole} = render(
      <RadioGroup line="row" items={items} isDisabled />,
    )
    const radios = getAllByRole('radio')
    radios.forEach((radio) =>
      expect(radio.getAttribute('aria-disabled')).toBe('true'),
    )
  })

  it('should returns valid parameters on change event', () => {
    const items = [
      {id: '1', isChecked: false, label: 'Item 1'},
      {id: '2', isChecked: false, label: 'Item 2'},
      {id: '3', isChecked: false, label: 'Item 3'},
      {id: '4', isChecked: false, label: 'Item 4'},
    ]

    const radioClickIndex = 1

    const {getAllByRole} = render(
      <RadioGroup
        line="row"
        items={items}
        isDisabled
        onChange={(params) => {
          expect(params.index).toBe(radioClickIndex)
          expect(params.item).toMatchObject(items[radioClickIndex])

          expect(params.itemsUpdated[0]).toMatchObject(items[0])
          expect(params.itemsUpdated[1]).toMatchObject({
            ...items[1],
            isChecked: true,
          })
          expect(params.itemsUpdated[2]).toMatchObject(items[2])
          expect(params.itemsUpdated[3]).toMatchObject(items[3])
        }}
      />,
    )

    const component = getAllByRole('radio')[radioClickIndex] as HTMLElement
    fireEvent.click(component)
  })
})
