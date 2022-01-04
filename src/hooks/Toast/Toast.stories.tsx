import React from 'react'
import {Story} from '@storybook/react'
import styled from 'styled-components'
import Button from '../../components/Button'

import useToast from '.'

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    margin: 0 0.375rem;
  }
`

const Template: Story = () => {
  const toast = useToast()
  return (
    <Wrap>
      <Button onClick={() => toast('Default!')}>Default</Button>
      <Button onClick={() => toast.success('Success!')}>Success</Button>
      <Button onClick={() => toast.error('Error!')}>Error</Button>
    </Wrap>
  )
}

export const Default = Template.bind({})

export default {
  title: 'Hooks/Toast',
}
