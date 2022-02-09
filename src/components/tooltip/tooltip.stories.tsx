import React from 'react'
import {Story} from '@storybook/react'
import styled from 'styled-components'

import Tooltip, {Props} from '.'

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Box = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  color: #fff;
  font-weight: bold;
  background-color: red;
  transition: all ease 250ms;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 1.25rem 0.25rem rgba(0, 0, 0, 0.3);
  }
`

const Template: Story<Props> = (args) => (
  <Wrap>
    <Tooltip {...args}>
      <Box>Hover me!</Box>
    </Tooltip>
  </Wrap>
)

export const Default = Template.bind({})

Default.args = {
  width: 240,
  children: 'hover me!',
  position: 'top',
  tooltip: 'Tooltip content',
}

const positions = ['top', 'bottom', 'left', 'right']

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    tooltip: {
      control: {
        type: 'text',
      },
    },
    position: {
      control: {
        type: 'select',
        options: positions,
      },
    },
  },
}
