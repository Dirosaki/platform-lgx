import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import { Fallback } from '@/components/Fallback'
import { Toaster } from '@/lib/sonner'

import { routes } from './Router'

import '@/styles/global.css'

export const App = () => (
  <Suspense fallback={<Fallback.App />}>
    <RouterProvider router={routes} />
    <Toaster />
  </Suspense>
)
