const entity = 'PRODUCTS'

const TypesActions = {
    GET_START: `${entity}_GET_START`,
    GET_COMPLETE: `${entity}_GET_COMPLETE`,
    GET_ERROR: `${entity}_GET_ERROR`,
    GET_PRODUCTS_BY_QUERY: `${entity}_GET_PRODUCTS_BY_QUERY`,
    GET_PRODUCTS_BY_ID: `${entity}_GET_PRODUCTS_BY_ID`,
    SET_LIST_PRODUCTS_STORE: `${entity}_SET_LIST_PRODUCTS_STORE`,
    SET_PRODUCT_STORE: `${entity}_SET_PRODUCT_STORE`
}

interface StateProps {
    data: ProductsProps[];
    isLoading: boolean;
    error: string;
    currentItem?: ProductsDetailsProps;
}

interface ProductsProps {
    id: string;
    title: string;
    price: {
        currency: string;
        amount: number;
        decimals: number;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
    categories: string[];
}

interface ProductsDetailsProps extends ProductsProps {
    sold_quantity: number;
    description: string;
}

export {
    TypesActions,
    StateProps,
    ProductsProps,
    ProductsDetailsProps
}