'use client'

import { ThemeProvider } from '@emotion/react'

import { theme } from '@common/styles'

import '@common/styles/src/emotion.d'

import '../styles/globalStyles.css'
import { UserForm } from '@common/components'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserForm onUserAdd={() => {}} />
    </ThemeProvider>
  )
}

export default App
