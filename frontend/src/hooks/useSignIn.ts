// hooks/useSignUp.ts

import { useState } from 'react'
import { login } from '../api/auth.api'
import type { SignInData } from '../types/auth.types'

export const useSignIn = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const signIn = async (data: SignInData) => {
    try {
      setLoading(true)
      setError(null)

      const response = await login(data)

      return response
    } catch (error) {
      setError('Registration failed')
      console.log(error);
      
      throw error
    } finally {
      setLoading(false)
    }
  }

  return {
    signIn,
    loading,
    error,
  }
}