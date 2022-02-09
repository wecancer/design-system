import React from 'react'
import {Story} from '@storybook/react'

import TabContext, {Props} from '.'
import Tab from './tab'
import Tabs from './tabs'
import TabContent from './tab-content'

const Template: Story<Props> = () => {
  return (
    <TabContext>
      <Tabs>
        <Tab target="0">First tab</Tab>
        <Tab target="1">Middle tab</Tab>
        <Tab target="2">Last tab</Tab>
      </Tabs>
      <TabContent id="0">This is my first tab</TabContent>
      <TabContent id="1">This is my middle tab</TabContent>
      <TabContent id="2">This is my last tab</TabContent>
    </TabContext>
  )
}

export const Default = Template.bind({})

export default {
  title: 'Components/Tab/Section',
  component: TabContext,
}
