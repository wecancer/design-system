import { render } from '../../../testing'

import Tab from './tab'
import Tabs from './tabs'
import TabContext from '.'
import TabContent from './tab-content'

describe('<TabSection />', () => {
  it('should render snapshot correctly', () => {
    const { container } = render(
      <TabContext>
        <Tabs>
          <Tab target="0">First tab</Tab>
          <Tab target="1">Middle tab</Tab>
          <Tab target="2">Last tab</Tab>
        </Tabs>
        <TabContent id="0">This is my first tab</TabContent>
        <TabContent id="1">This is my middle tab</TabContent>
        <TabContent id="2">This is my last tab</TabContent>
      </TabContext>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the 5 items in the tab section', () => {
    const { getAllByRole } = render(
      <TabContext>
        <Tabs>
          <Tab target="0">First tab</Tab>
          <Tab target="1">Middle tab</Tab>
          <Tab target="2">Last tab</Tab>
        </Tabs>
        <TabContent id="0">This is my first tab</TabContent>
        <TabContent id="1">This is my middle tab</TabContent>
        <TabContent id="2">This is my last tab</TabContent>
      </TabContext>,
    )

    expect(getAllByRole('tab')).toHaveLength(3)
  })

  it('should have the label item', () => {
    const { getByText } = render(
      <TabContext>
        <Tabs>
          <Tab target="0">First tab</Tab>
          <Tab target="1">Middle tab</Tab>
          <Tab target="2">Last tab</Tab>
        </Tabs>
        <TabContent id="0">This is my first tab</TabContent>
        <TabContent id="1">This is my middle tab</TabContent>
        <TabContent id="2">This is my last tab</TabContent>
      </TabContext>,
    )

    const frist = getByText('First tab')

    expect(frist).toBeInstanceOf(HTMLElement)
  })

  it('should render the first item content by default', () => {
    const { getByText, queryByText } = render(
      <TabContext>
        <Tabs>
          <Tab target="0">First tab</Tab>
          <Tab target="1">Middle tab</Tab>
          <Tab target="2">Last tab</Tab>
        </Tabs>
        <TabContent id="0">This is my first tab</TabContent>
        <TabContent id="1">This is my middle tab</TabContent>
        <TabContent id="2">This is my last tab</TabContent>
      </TabContext>,
    )

    const fristContent = getByText('This is my first tab')
    const midleContent = queryByText('This is my middle tab')
    const lastContent = queryByText('This is my last tab')

    expect(fristContent).toBeInstanceOf(HTMLElement)
    expect(midleContent).toBeNull()
    expect(lastContent).toBeNull()
  })

  it('should active the Middle tab', () => {
    const { getByText } = render(
      <TabContext active="1">
        <Tabs>
          <Tab target="0">First tab</Tab>
          <Tab target="1">Middle tab</Tab>
          <Tab target="2">Last tab</Tab>
        </Tabs>
        <TabContent id="0">This is my first tab</TabContent>
        <TabContent id="1">This is my middle tab</TabContent>
        <TabContent id="2">This is my last tab</TabContent>
      </TabContext>,
    )

    const frist = getByText('This is my middle tab')

    expect(frist).toBeInstanceOf(HTMLElement)
  })
})
