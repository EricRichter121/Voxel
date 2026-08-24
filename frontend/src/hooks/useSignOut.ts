
import { useState } from 'react'

import { logout } from '../api/auth.api' 

export const useSignOut = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const signOut = async () => {
    setLoading(true)
    setError(null)

    try {
      await logout()
      // Здесь можно добавить логику очистки токена из cookieStore
    } catch (err) {
      setError('Failed to sign out')
    } finally {
      setLoading(false)
    }
  }

  return { signOut, loading, error }
}