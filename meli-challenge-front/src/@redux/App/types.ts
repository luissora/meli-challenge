const entity = 'APP'

const TypesActions = {
    GET_START: `${entity}_GET_START`,
    GET_COMPLETE: `${entity}_GET_COMPLETE`,
    GET_ERROR: `${entity}_GET_ERROR`,
    GET_LOGOUT_USER: `${entity}_GET_LOGOUT_USER`,
    GET_LOGIN_USER: `${entity}_GET_LOGIN_USER`,
    SET_USER_AUTH_STORE: `${entity}_SET_USER_AUTH_STORE`,
    CHANGE_PASSWORD: `${entity}_CHANGE_PASSWORD`
}

interface StateProps {
    currentUser: AuthProps;
    isLoading: boolean;
    error: string;
}

interface AuthProps {
    success: boolean;
}

export {
    TypesActions,
    AuthProps,
    StateProps
}