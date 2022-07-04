import { AuthProps, TypesActions } from './types'

const getStart = () => ({
    type: TypesActions.GET_START
})

const getComplete = () => ({
    type: TypesActions.GET_COMPLETE
})

const getError = (message: string) => ({
    type: TypesActions.GET_ERROR,
    message
})

const setCurrentUserStore = (data: AuthProps) => ({
    type: TypesActions.SET_USER_AUTH_STORE,
    data
})

const getLogout = () => ({
    type: TypesActions.GET_LOGOUT_USER
})

const getLogin = (user: string, pass: string) => ({
    type: TypesActions.GET_LOGIN_USER,
    user,
    pass
})

const changePassword = (userId: string, newPassword: string) => ({
    type: TypesActions.CHANGE_PASSWORD,
    userId,
    newPassword
})

export default {
    getStart,
    getComplete,
    getError,
    getLogin,
    getLogout,
    setCurrentUserStore,
    changePassword
}