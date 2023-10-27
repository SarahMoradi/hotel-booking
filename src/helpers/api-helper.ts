import type {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import axios from 'axios'

import {getAuth} from './auth-helper'

enum StatusCode {
  InternalServerError = 500,
  TooManyRequests = 429,
  Success = 200 || 300,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  ValidationError = 422,
}

type CustomErrorResponse = {
  message: string
  errors: string[]
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': true,
  'X-Requested-With': 'XMLHttpRequest',
}

const injectToken = (
  config: AxiosRequestConfig<string>
): string | AxiosRequestConfig<string> | any => {
  try {
    const auth = getAuth()
    if (auth && auth.accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${auth.accessToken}`
    }
    return config
  } catch (error) {
    throw new Error(String(error))
  }
}

class Api {
  private instance: AxiosInstance | null = null

  // readonly baseUrl = process.env.REACT_APP_HOTEL_URL
  readonly baseUrl = 'https://bazichi.iran.liara.run'

  http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp()
  }

  initHttp() {
    const http = axios.create({
      baseURL: this.baseUrl,
      headers,
    })
    http.interceptors.request.use(
      (config) => injectToken(config),
      (error) => Promise.reject(error)
    )
    http.interceptors.response.use(
      (response: AxiosResponse) => {
        return response.data
      },
      (error) => {
        this.handleError(error)
        throw error
      }
    )
    this.instance = http
    return http
  }

  private handleError(error: AxiosError) {
    if (error.response) {
      if (error.response.data) {
        console.log(error.response.data, 'Error')
      } else {
        console.log('something went wrong', 'Error')
      }
      if (error.response.status === 401) {
        console.log('error 401')
      }
    }
  }
}

const api = new Api().initHttp()

export {api}
