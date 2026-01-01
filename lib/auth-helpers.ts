import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

/**
 * Obtém a sessão do utilizador atual
 * @returns Session ou null se não autenticado
 */
export async function getSession() {
  return await auth()
}

/**
 * Obtém o utilizador atual ou redireciona para login
 * Útil para páginas protegidas
 */
export async function requireAuth() {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  return session
}

/**
 * Obtém o ID do utilizador atual
 * @returns User ID ou null se não autenticado
 */
export async function getCurrentUserId() {
  const session = await auth()
  return session?.user?.id ?? null
}

/**
 * Verifica se o utilizador está autenticado
 */
export async function isAuthenticated() {
  const session = await auth()
  return !!session?.user
}
