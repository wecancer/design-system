import React from 'react'
import { Story } from '@storybook/react'
import Table, { Props } from '.'
import TableRow from './row'
import TableCell from './cell'
import TableHeader from './header'
import TableHeaderCell from './header-cell'
import Pill from '../pill'

const Template: Story<Props> = () => (
  <Table cellsWitdh="100px 200px 1fr 1fr">
    <TableHeader>
      <TableHeaderCell>Head 1</TableHeaderCell>
      <TableHeaderCell>Head 2</TableHeaderCell>
      <TableHeaderCell>Head 3</TableHeaderCell>
      <TableHeaderCell>Head 4</TableHeaderCell>
    </TableHeader>
    <TableRow onClick={() => alert('First row was clicked')}>
      <TableCell type="warning">Warning</TableCell>
      <TableCell>Clickable</TableCell>
      <TableCell>Item 3</TableCell>
      <TableCell>
        Proin viverra justo vitae aliquam pulvinar. Interdum et malesuada fames
        ac ante ipsum primis in faucibus.
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell type="error">Error!</TableCell>
      <TableCell>Item 2</TableCell>
      <TableCell>
        <Pill label="Example" isActive fillColor="magenta" />
      </TableCell>
      <TableCell>
        Phasellus vel velit et mi eleifend dignissim. Duis vitae mi magna. Proin
        in feugiat urna.
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell type="line">Item 1</TableCell>
      <TableCell>Item 2</TableCell>
      <TableCell>Item 3</TableCell>
      <TableCell>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell type="input">Item 1</TableCell>
      <TableCell>Item 2</TableCell>
      <TableCell>Item 3</TableCell>
      <TableCell>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
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
  </Table>
)

export const Default = Template.bind({})

export default {
  title: 'Components/TableList',
  component: Table,
}
