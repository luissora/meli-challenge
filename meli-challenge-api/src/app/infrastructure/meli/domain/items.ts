import client from "../client";
import { ItemDetailsProps, SearchProps, DescriptionProps } from "../types";
const ENDPOINT = '/items'

const getItemById = async (id: string) => {
    return client.get<ItemDetailsProps>(`${ENDPOINT}/${id}`)
}

const getItemDescriptionById = async (id: string) => {
    return client.get<DescriptionProps>(`${ENDPOINT}/${id}/description`)
}

export default {
    getItemById,
    getItemDescriptionById
}