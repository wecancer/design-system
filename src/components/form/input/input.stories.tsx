import { useState } from 'react'
import styled from 'styled-components'
import { Story } from '@storybook/react'
import Input, { Props } from './input'
import { iconsMap } from '../../icon'
import Button from '../../button'
import InputEmail from './email'
import InputPassword from './password'

const Row = styled.div`
  margin-bottom: 1rem;
`

const Template: Story<Props> = (args) => {
  const [value, onChange] = useState('')
  return (
    <Input
      {...args}
      value={value}
      onChange={(params) => onChange(params.value)}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  id: 'label-id',
  type: 'text',
}

export default {
  title: 'Components/Form/Input/Input',
  component: Input,
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'email', 'password'],
      },
    },
    iconLeft: {
      control: {
        type: 'select',
        options: Object.keys(iconsMap),
      },
    },
  },
}

const FormVlidationTemplate: Story<Props> = () => {
  const [required, setRequired] = useState('')
  const [norules, setNorules] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  return (
    <form onSubmit={() => alert('The form is submitted')}>
      <Row>
        <Input
          required
          type="text"
          id="required"
          label="Required"
          value={required}
          onChange={(params) => setRequired(params.value)}
        />
      </Row>
      <Row>
        <Input
          type="text"
          id="no-rules"
          value={norules}
          label="Not required"
          onChange={(params) => setNorules(params.value)}
        />
      </Row>
      <Row>
        <InputEmail
          id="email"
          label="Email"
          value={email}
          onChange={(params) => setEmail(params.value)}
        />
      </Row>
      <Row>
        <InputPassword
          id="pwd"
          value={password}
          label="Password"
          onChange={(params) => setPassword(params.value)}
        />
      </Row>
      <Row>
        <InputPassword
          id="pwd2"
          value={rePassword}
          label="Repeat the password"
          customValidation={{
            isValid: password === rePassword,
            message: 'The password not match',
          }}
          onChange={(params) => setRePassword(params.value)}
        />
      </Row>
      <Button type="submit" primary>
        Submit
      </Button>
    </form>
  )
}

export const FormVlidation = FormVlidationTemplate.bind({})
