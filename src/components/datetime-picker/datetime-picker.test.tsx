import { format } from 'date-fns'

import DateTimePicker from '.'
import { render, fireEvent } from '../../testing'

describe('<DateTimePicker />', () => {
  it('should render snapshot correctly', () => {
    const { container } = render(
      <DateTimePicker
        datetime={new Date(0, 0, 0, 0, 0)}
        labelDatePicker="labelDatePicker"
        labelTimePicker="labelTimePicker"
        onChange={() => null}
      />,
    )
    fireEvent.click(container)
    expect(container).toMatchSnapshot()
  })

  it('should only show one box at a time', async () => {
    const { findByText, queryByRole, queryByText } = render(
      <DateTimePicker
        datetime={new Date(2012, 11, 12, 10, 30)}
        labelDatePicker="labelDatePicker"
        labelTimePicker="labelTimePicker"
        onChange={() => null}
      />,
    )

    const listboxHours = queryByRole('listbox')
    const labelCalendar = await findByText('labelDatePicker')

    fireEvent.click(labelCalendar)

    expect(listboxHours).toBeNull()
    expect(await findByText('December 2012')).toBeDefined()

    const inputTime = await findByText('labelTimePicker')
    fireEvent.click(inputTime)

    expect(listboxHours).toBeDefined()
    expect(queryByText('December 2012')).toBeNull()
  })

  it('should validate the onChange event of the date on datetimer picker', async () => {
    const { findByText } = render(
      <DateTimePicker
        datetime={new Date(2012, 11, 12, 10, 30)}
        labelDatePicker="labelDatePicker"
        labelTimePicker="labelTimePicker"
        onChange={({ value }) =>
          expect('2012-12-15').toBe(format(value, 'yyyy-MM-dd'))
        }
      />,
    )

    const labelCalendar = await findByText('labelDatePicker')
    fireEvent.click(labelCalendar)

    const btnDate15 = await findByText('15')
    fireEvent.click(btnDate15)
  })

  it('should validates the hours when the input is changed', async () => {
    const { findByDisplayValue } = render(
      <DateTimePicker
        datetime={new Date(2012, 11, 12, 10, 30)}
        labelDatePicker="labelDatePicker"
        labelTimePicker="labelTimePicker"
        onChange={({ value }) =>
          expect('2012-12-12 22:30').toBe(format(value, 'yyyy-MM-dd HH:mm'))
        }
      />,
    )

    const inputHour = await findByDisplayValue('10')
    fireEvent.change(inputHour, { target: { value: '22' } })
  })

  it('should validates the minutes when the input is changed', async () => {
    const { findByDisplayValue } = render(
      <DateTimePicker
        datetime={new Date(2012, 11, 12, 10, 30)}
        labelDatePicker="labelDatePicker"
        labelTimePicker="labelTimePicker"
        onChange={({ value }) =>
          expect('2012-12-12 10:45').toBe(format(value, 'yyyy-MM-dd HH:mm'))
        }
      />,
    )

    const inputMinute = await findByDisplayValue('30')
    fireEvent.change(inputMinute, { target: { value: '45' } })
  })
})
