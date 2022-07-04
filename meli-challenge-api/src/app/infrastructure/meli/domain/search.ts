import client from '../client'
import { SearchProps, ItemProps } from '../types'
const ENDPOINT = '/sites/MLA/search'

const getSearchByQuery = async (query: string, offset: number = 0, limit: number = 50) => {
    return client.get<SearchProps<ItemProps>>(`${ENDPOINT}/?q=${query}&offset=${offset}&limit=${limit}`)
}

export default {
    getSearchByQuery
}