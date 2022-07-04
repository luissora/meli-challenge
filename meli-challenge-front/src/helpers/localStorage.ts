const NAME_TOKEN_STORAGE = '@token';

const { getItem, setItem, removeItem } = localStorage

const saveAuthorizarionToken = (token: string) => localStorage.setItem(NAME_TOKEN_STORAGE, token)

const removeAuthorizarionToken = () => localStorage.removeItem(NAME_TOKEN_STORAGE)

const getAuthorizarionToken = () => localStorage.getItem(NAME_TOKEN_STORAGE)

export default {
    saveAuthorizarionToken,
    removeAuthorizarionToken,
    getAuthorizarionToken,
    getItem,
    setItem,
    removeItem
}

