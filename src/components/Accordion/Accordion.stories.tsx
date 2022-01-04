import {Story} from '@storybook/react'

import Accordion, {Props} from '.'
import ItemAccordion from './Item'

const Template: Story<Props> = () => {
  return (
    <Accordion isMulti>
      <ItemAccordion title="item 1">item 1</ItemAccordion>
      <ItemAccordion title="item 2">item 2</ItemAccordion>
      <ItemAccordion title="item 3">item 3</ItemAccordion>
      <ItemAccordion title="item 4">item 4</ItemAccordion>
    </Accordion>
  )
}

export const Default = Template.bind({})

export default {
  title: 'Components/Accordion',
  component: Accordion,
  isMulti: {
    control: {
      type: 'boolean',
    },
  },
}
