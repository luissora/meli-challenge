const entity = 'PRODUCTS'

const ActionsType = {
    GET_PRODUCTS_BY_QUERY: `${entity}_GET_PRODUCTS_BY_QUERY`,
    GET_PRODUCTS_BY_ID: `${entity}_GET_PRODUCTS_BY_ID`,
    ADD_PRODUCT: `${entity}_ADD_PRODUCT`,
    UPDATE_PRODUCT: `${entity}_UPDATE_PRODUCT`,
    DELETE_PRODUCT: `${entity}_DELETE_PRODUCT`
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

export  {
    ProductsProps,
    ProductsDetailsProps,
    ActionsType
}

