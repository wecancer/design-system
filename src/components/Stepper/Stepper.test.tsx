import Stepper from '.'
import {render} from '../../testing'

describe('<Stepper />', () => {
  it('should render snapshot correctly', () => {
    const {container} = render(
      <>
        <Stepper items={[]} current={1} />
        <Stepper items={[{id: '1'}, {id: '2'}]} current={1} />
        <Stepper
          current={0}
          items={[
            {label: 'item 1', id: '1'},
            {label: 'item 2', id: '2'},
            {label: 'item 3', id: '3'},
          ]}
        />
        <Stepper
          current={1}
          items={[
            {label: 'item 1', id: '1'},
            {label: 'item 2', id: '2'},
            {label: 'item 3', id: '3'},
          ]}
        />
        <Stepper
          current={2}
          items={[
            {label: 'item 1', id: '1'},
            {label: 'item 2', id: '2'},
            {label: 'item 3', id: '3'},
          ]}
        />
        <Stepper
          current={3}
          items={[
            {label: 'item 1', id: '1'},
            {label: 'item 2', id: '2'},
            {label: 'item 3', id: '3'},
          ]}
        />
        <Stepper
          current={4}
          items={[
            {label: 'item 1', id: '1'},
            {label: 'item 2', id: '2'},
            {label: 'item 3', id: '3'},
          ]}
        />
      </>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render aria properties correctly', () => {
    const {getByRole} = render(
      <Stepper
        current={2}
        items={[
          {label: 'item 1', id: '1'},
          {label: 'item 2', id: '2'},
          {label: 'item 3', id: '3'},
        ]}
      />,
    )

    expect(getByRole('progressbar').getAttribute('aria-valuenow')).toBe('2')
    expect(getByRole('progressbar').getAttribute('aria-valuemin')).toBe('0')
    expect(getByRole('progressbar').getAttribute('aria-valuemax')).toBe('3')
  })
})
