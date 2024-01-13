const TOKEN = import.meta.env.BASE_URL

export const getToken = () => localStorage.getItem(TOKEN)

export const setToken = (str: any) => localStorage.setItem(TOKEN, str)

export const destroyToken = () => localStorage.removeItem(TOKEN)
