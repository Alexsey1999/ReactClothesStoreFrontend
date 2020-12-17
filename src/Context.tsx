// @ts-nocheck
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { setUser } from './store/users/actions'
import { AxiosResponse } from 'axios'
import axios from './axios'

interface UserInterface {
  id: string
  username: string
}

export const myContext = createContext<Partial<UserInterface>>({})

export default function Context(props: PropsWithChildren<any>) {
  const dispatch = useDispatch()
  const [user, setUser] = useState<UserInterface>()
  useEffect(() => {
    axios.get('/user', { withCredentials: true }).then((res: AxiosResponse) => {
      setUser(res.data)
    })
  }, [])

  return <myContext.Provider value={user!}>{props.children}</myContext.Provider>
}
