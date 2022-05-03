import Table from '.'
import TableRow from './row'
import TableCell from './cell'
import TableHeader from './header'
import { render } from '../../testing'

describe('<Table />', () => {
  it('should render snapshot correctly', () => {
    const { container } = render(
      <Table cellsWitdh="100px 200px 1fr 1fr">
        <TableHeader>
          <TableCell>Head 1</TableCell>
          <TableCell>Head 2</TableCell>
          <TableCell>Head 3</TableCell>
          <TableCell>Head 4</TableCell>
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
})
