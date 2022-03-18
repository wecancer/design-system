import { useState } from 'react'
import { Story } from '@storybook/react'
import Pagination, { Props } from './index'

const Template: Story<Props> = (args) => {
  const [currentPage, setCurrentPage] = useState(1)

  const onPaginate = ({ page }: { page: number }) => {
    setCurrentPage(page)
  }
  return (
    <Pagination {...args} currentPage={currentPage} onPaginate={onPaginate} />
  )
}

const ShortPaginationTemplate: Story<Props> = (args) => {
  const [currentPage, setCurrentPage] = useState(1)

  const onPaginate = ({ page }: { page: number }) => {
    setCurrentPage(page)
  }
  return (
    <Pagination {...args} currentPage={currentPage} onPaginate={onPaginate} />
  )
}

export const ShortPagination = ShortPaginationTemplate.bind({})

ShortPagination.args = {
  amount: 5,
}

export const Default = Template.bind({})
Default.args = {
  amount: 10,
}

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {},
}
