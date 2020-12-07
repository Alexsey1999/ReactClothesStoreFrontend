export const SET_JWT = 'SET_JWT'
export const REMOVE_JWT = 'REMOVE_JWT'

export const setJwt = (payload: string) => ({
  type: SET_JWT,
  payload,
})

export const removeJwt = () => ({
  type: REMOVE_JWT,
})
