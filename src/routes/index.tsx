import {createBrowserRouter} from 'react-router-dom'
import Login from '../pages/auth/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: 'login',
    element: <Login />,
  },
])
export default router
