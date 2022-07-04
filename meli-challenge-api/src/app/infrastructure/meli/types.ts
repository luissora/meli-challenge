
interface SearchProps<T> {
    site_id: string;
    country_default_time_zone: string;
    query: string;
    paging: {
        total: number;
        primary_results: number;
        offset: number;
        limit: number;
    };
    results: T[]
}

interface ItemProps {
    id: string;
    site_id: string;
    title: string;
    currency_id: string;
    price: number;
    thumbnail: string;
    shipping: {
        free_shipping: boolean;
    };
    condition: string;
}

interface ItemDetailsProps extends ItemProps {
    description: string;
    sold_quantity: number;
    pictures: {
        id: string;
        url: string;
        secure_url: string;
        size: string;
        max_size: string;
        quality: string
    }[];
    
}

interface DescriptionProps {
    text: string;
    plain_text: string;
    last_updated: Date;
    date_created: Date
}

export {
    SearchProps,
    ItemProps,
    ItemDetailsProps,
    DescriptionProps
}