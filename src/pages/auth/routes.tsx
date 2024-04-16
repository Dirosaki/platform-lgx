import { RouteObject } from 'react-router-dom'

import { AuthLayout } from '@/layouts/AuthLayout'
import { lazyLoad } from '@/utils/lazyLoad'

const { Login } = lazyLoad(() => import('./Login'))
const { Register } = lazyLoad(() => import('./Register'))
const { ForgotPassword } = lazyLoad(() => import('./ForgotPassword'))
const { ResetPassword } = lazyLoad(() => import('./ResetPassword'))

export const authRoutes = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: 'auth/login',
        element: <Login />,
      },
      {
        path: 'auth/register',
        element: <Register />,
      },
      {
        path: 'auth/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'auth/reset-password',
        element: <ResetPassword />,
      },
    ],
  },
] satisfies RouteObject[]
