import Table from '.'
import TableRow from './row'
import TableCell from './cell'
import TableHeader from './header'
import TableHeaderCell from './header-cell'
import { render, fireEvent } from '../../testing'

describe('<Table />', () => {
  it('should render snapshot correctly', () => {
    const { container } = render(
      <Table cellsWitdh="100px 200px 1fr 1fr">
        <TableHeader>
          <TableHeaderCell>Head 1</TableHeaderCell>
          <TableHeaderCell onSort={() => null}>Head 2</TableHeaderCell>
          <TableHeaderCell onSort={() => null}>Head 3</TableHeaderCell>
          <TableHeaderCell>Head 4</TableHeaderCell>
        </TableHeader>
        <TableRow onClick={() => null}>
          <TableCell type="warning">Warning</TableCell>
          <TableCell>Clickable</TableCell>
          <TableCell>Item 3</TableCell>
          <TableCell>
            Proin viverra justo vitae aliquam pulvinar. Interdum et malesuada
            fames ac ante ipsum primis in faucibus.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell type="error">Error!</TableCell>
          <TableCell>Item 2</TableCell>
          <TableCell>Item 3</TableCell>
          <TableCell>
            Phasellus vel velit et mi eleifend dignissim. Duis vitae mi magna.
            Proin in feugiat urna.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell type="input">Item 1</TableCell>
          <TableCell>Item 2</TableCell>
          <TableCell>Item 3</TableCell>
          <TableCell>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Item 1</TableCell>
          <TableCell>Item 2</TableCell>
          <TableCell>Item 3</TableCell>
          <TableCell>
            Nulla iaculis, erat ultrices egestas pretium, metus augue efficitur
            massa, blandit elementum arcu dolor at erat.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Item 1</TableCell>
          <TableCell>Item 2</TableCell>
          <TableCell>Item 3</TableCell>
          <TableCell>Item 4</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Item 1</TableCell>
          <TableCell>Item 2</TableCell>
        </TableRow>
      </Table>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should sort cell on table header', () => {
    const handleClick = jest.fn()
    let count = 0
    const { getByText } = render(
      <Table cellsWitdh="100px 200px 1fr 1fr">
        <TableHeader>
          <TableHeaderCell>Head 1</TableHeaderCell>
          <TableHeaderCell
            onSort={({ direction }) => {
              count++
              handleClick()
              expect(direction).toBe(count === 1 ? 1 : -1)
            }}
          >
            Head 2
          </TableHeaderCell>
        </TableHeader>
        <TableRow>
          <TableCell>Item 1</TableCell>
          <TableCell>Item 2</TableCell>
        </TableRow>
      </Table>,
    )
    const headSort = getByText('Head 2')
    fireEvent.click(headSort)
    fireEvent.click(headSort)

    expect(handleClick).toBeCalledTimes(2)
  })
})
