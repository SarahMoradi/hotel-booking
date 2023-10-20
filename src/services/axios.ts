import axios from 'axios'

const BASE_URL = 'https://bazichi.iran.liara.run/'
const TOKEN = await JSON.parse(localStorage.getItem('auth') || '')

export const axiosAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: `${TOKEN}`,
  },
})
