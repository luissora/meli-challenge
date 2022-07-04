import IModels from '../../app/contracts/IModels';
import { ProductsDetailsProps, ProductsProps } from './types'

import { items, search } from '../../app/infrastructure/meli'

class Products implements IModels<ProductsDetailsProps> {
    
    get: () => Promise<ProductsDetailsProps>;
    async getByQuery(query: string) {
        const result = await search.getSearchByQuery(query, 0, 4)

        return result.data.results.map(x => ({
            id: x.id,
            title: x.title,
            price: {
                currency: x.currency_id,
                amount: x.price,
                decimals: x.price
            },
            picture: x.thumbnail,
            free_shipping: x.shipping.free_shipping,
            condition: x.condition
        }) as ProductsProps)
    }
    async getById(id: string){
        const result = await items.getItemById(id)
        const resultDescription = await items.getItemDescriptionById(id)
        
        return {
            id: result.data.id,
            title: result.data.title,
            price: {
                currency: result.data.currency_id,
                amount: result.data.price,
                decimals: result.data.price
            },
            picture: result.data.pictures[0].url,
            free_shipping: result.data.shipping.free_shipping,
            sold_quantity: result.data.sold_quantity,
            description: resultDescription.data.plain_text,
            condition: result.data.condition
        } as ProductsDetailsProps
    }
    add: (item?: ProductsProps) => void;
    update: (item: ProductsProps) => void;
    delete: (id: string | number) => void;
}

export default Products;