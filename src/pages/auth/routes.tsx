import { RouteObject } from 'react-router-dom'

import { AuthLayout } from '@/layouts/AuthLayout'
import { lazyLoad } from '@/utils/lazyLoad'

const { Login } = lazyLoad(() => import('./Login'))

export const authRoutes = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: 'auth/login',
        element: <Login />,
      },
    ],
  },
] satisfies RouteObject[]
