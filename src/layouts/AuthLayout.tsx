import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Brand } from '@/components/Brand'
import { Fallback } from '@/components/Fallback'

export const AuthLayout = () => (
  <main className="flex min-h-dvh flex-col items-center gap-12 bg-background bg-cover bg-center px-4 py-12 text-white md:bg-auth md:py-20">
    <Brand />
    <Suspense fallback={<Fallback.AuthLayout />}>
      <Outlet />
    </Suspense>
  </main>
)
