import {api} from '../../helpers/api-helper'

// const BASE_APP_URL = process.env.REACT_APP_HOTEL_URL
// const LOGIN_URL = `${BASE_APP_URL}/auth`
const LOGIN_URL = `https://bazichi.iran.liara.run/auth`

export async function login(values: {username: string; password: string}) {
  return api.post(LOGIN_URL, values)
}
