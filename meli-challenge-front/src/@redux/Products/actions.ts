import { ProductsDetailsProps, ProductsProps, TypesActions } from './types'

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

const getProductsByQuery = (query: string) => ({
    type: TypesActions.GET_PRODUCTS_BY_QUERY,
    query
})

const getProductById = (id: string) => ({
    type: TypesActions.GET_PRODUCTS_BY_ID,
    id
})

const setListProductsStore = (data: ProductsProps[]) => ({
    type: TypesActions.SET_LIST_PRODUCTS_STORE,
    data
})

const setProductStore = (data?: ProductsDetailsProps) => ({
    type: TypesActions.SET_PRODUCT_STORE,
    data
})
export default {
    getStart,
    getComplete,
    getError,
    getProductById,
    getProductsByQuery,
    setListProductsStore,
    setProductStore
}