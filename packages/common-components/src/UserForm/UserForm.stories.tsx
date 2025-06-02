import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import UserForm, { UserFormProps } from './UserForm'

export default {
  title: 'Components/UserForm',
  component: UserForm
} as Meta

const Template: StoryFn<UserFormProps> = (args: any) => <UserForm {...args} />

export const Default = Template.bind({})
Default.args = {
  onUserAdd: (user: any) => alert(`User Added: ${JSON.stringify(user)}`)
}

export const WithPreFilledData = Template.bind({})
WithPreFilledData.args = {
  onUserAdd: (user: any) => alert(`User Added: ${JSON.stringify(user)}`)
}

WithPreFilledData.decorators = [
  (Story: any) => {
    const [name, setName] = React.useState('John Doe')
    const [email, setEmail] = React.useState('john.doe@example.com')
    return (
      <Story name={name} email={email} setName={setName} setEmail={setEmail} />
    )
  }
]
