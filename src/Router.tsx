import { createBrowserRouter } from 'react-router-dom'

import { authRoutes } from './pages/auth/routes'

export const routes = createBrowserRouter([...authRoutes])
