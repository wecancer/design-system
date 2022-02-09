import {useState} from 'react'
import {Story} from '@storybook/react'
import InputEmail, {Props} from './Email'

const Template: Story<Props> = (args) => {
  const [email, setEmail] = useState('')
  return <InputEmail {...args} onChange={({value}) => setEmail(value)} value={email} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'Input Email',
  id: 'label-id',
}

export default {
  title: 'Components/Form/Input/Email',
  component: InputEmail,
}
