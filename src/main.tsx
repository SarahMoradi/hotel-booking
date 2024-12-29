import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import axios from 'axios'
import {setupAxios} from './helpers/auth-helper'
import router from './routes'

setupAxios(axios)

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
