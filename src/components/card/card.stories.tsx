import React from 'react'
import styled from 'styled-components'
import { Story } from '@storybook/react'

import Card from '.'
import CardIcon from './card-icon'
import CardImage from './card-image'
import CardContent from './card-content'
import CardValue from './card-value'
import { BgTypes } from '../../styles/theme'

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  align-items: flex-start;
  grid-template-columns: repeat(4, 1fr);
`

const Template: Story = () => {
  return (
    <Grid>
      <Card>
        <CardImage
          height={150}
          imageUrl="https://medicinasa.com.br/wp-content/uploads/2019/04/WeCancer2a.jpg"
        />
        <CardContent>The card with image</CardContent>
      </Card>
      <Card>
        <CardImage
          position="top-left"
          imageUrl="https://medicinasa.com.br/wp-content/uploads/2019/04/WeCancer2a.jpg"
        />
        <CardContent>
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </CardContent>
      </Card>
      <Card>
        <CardIcon name="check" size={32} />
        <CardContent>Card with icon</CardContent>
      </Card>
      <Card onClick={(e) => e.preventDefault()}>
        <CardContent>Card clickable</CardContent>
      </Card>
      <Card bgColor={BgTypes.error} onClick={(e) => e.preventDefault()}>
        <CardValue fillColor="error" value={10} label="Patients" />
        <CardContent>Card clickable</CardContent>
      </Card>
      <Card>
        <CardValue value="+99" label="Notes" />
        <CardContent>Check it out!</CardContent>
      </Card>
    </Grid>
  )
}

export const Default = Template.bind({})

export default {
  title: 'Components/Card',
  component: Card,
}
