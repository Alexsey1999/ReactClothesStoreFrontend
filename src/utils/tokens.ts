export const removeTokenIfExists = (token: string) => {
  if (localStorage.getItem(token)) {
    localStorage.removeItem(token)
  }
}
