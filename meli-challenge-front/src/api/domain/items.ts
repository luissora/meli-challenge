import axiosClient from "../AxiosClient"

const getItemsByQuery = async (query: string) => {
    return axiosClient.get('/items/?q=' + query)
}

const getItemById = async (id: string) => {
    return axiosClient.get('/items/' + id)
}

export {
    getItemsByQuery,
    getItemById
}