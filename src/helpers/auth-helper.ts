import {AuthModel} from '../models/auth'

const AUTH_LOCAL_STORAGE_KEY = 'kt-auth-react-v'
const getAuth = (): AuthModel | undefined => {
  if (!localStorage) {
    return
  }

  const lsValue: string | null = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY)
  if (!lsValue) {
    return
  }

  try {
    const auth: AuthModel = JSON.parse(lsValue) as AuthModel
    if (auth) {
      return auth
    }
  } catch (error) {
    console.error('AUTH LOCAL STORAGE PARSE ERROR', error)
  }
}

export function setupAxios(axios: any) {
  axios.defaults.headers.Accept = 'application/json'
  axios.interceptors.request.use(
    (config: {headers: {Authorization: string}}) => {
      const auth = getAuth()
      if (auth && auth.accessToken) {
        config.headers.Authorization = `Bearer ${auth.accessToken}`
      }
      return config
    },
    (err: any) => Promise.reject(err)
  )
  axios.interceptors.response.use(
    (response: any) => {
      return response
    },
    (error: any) => {
      if (error.response) {
        if (error.response.data) {
          console.log(error.response.data.message, 'Error')
        } else {
          console.log('something went wrong', 'Error')
        }
        if (error.response.status === 401) {
          console.log('Here')
        }
      }
      return error
    }
  )
}

export {getAuth}
