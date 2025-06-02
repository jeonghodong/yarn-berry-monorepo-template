import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from './UserForm'

test('두 개의 입력과 버튼이 표시됩니다.', async () => {
  render(<UserForm onUserAdd={() => {}} />)

  const inputs = screen.getAllByRole('textbox')
  const button = screen.getByRole('button')

  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()
})

test('양식이 제출될 때 사용자 추가를 호출합니다.', async () => {
  const mock = jest.fn()

  // UserForm 컴포넌트 렌더링
  render(<UserForm onUserAdd={mock} />)

  // 두개의 인풋 찾기
  const nameInput = screen.getByRole('textbox', { name: /name/i })
  const emailInput = screen.getByRole('textbox', { name: /email/i })

  await user.click(nameInput)
  await user.keyboard('jane')

  await user.click(emailInput)
  await user.keyboard('jane@jane.com')

  const button = screen.getByRole('button')

  await user.click(button)

  expect(mock).toHaveBeenCalled
  expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@jane.com' })
})
