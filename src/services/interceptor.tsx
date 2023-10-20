import {useEffect} from 'react'
import {axiosAPI} from './axios'

export const API_INTERCEPTOR = ({children}: any) => {
  useEffect(() => {
    axiosAPI.interceptors.request.use(async (config) => {
      const TOKEN = await localStorage.getItem('auth')
      if (config.headers) config.headers.Authorization = `Bearer ${TOKEN}`
      return config
    })

    const responseInterceptor = (res: any) => {
      return res
    }

    const errorInterceptor = (err: any) => {
      if (err.response.status === 401) {
        console.log('Unauthorized!')
        //navigate to /auth
      }
      return Promise.reject(err)
    }

    const interceptor = axiosAPI.interceptors.response.use(responseInterceptor, errorInterceptor)
    return () => {
      axiosAPI.interceptors.response.eject(interceptor)
    }
  }, [])

  return children
}
