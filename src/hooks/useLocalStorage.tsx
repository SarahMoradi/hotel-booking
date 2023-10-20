import {useEffect, useState} from 'react'

//TODO
type props = {
  key: string
  initialState: string | null
}

export default function useLocalStorage(key: string, initialState: string | null) {
  const [value, setValue] = useState(() => {
    if (key) {
      const localStorageValue = localStorage.getItem(key)
      if (localStorageValue) {
        return JSON.parse(localStorageValue)
      } else {
        return initialState
      }
    }
  })

  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [value])
  return [value, setValue]
}
