
const responseException = (status: number, message?: string) => {
    return {
        status,
        message: `${message ? message : ''}`
    }
}

export default {
    responseException
}
