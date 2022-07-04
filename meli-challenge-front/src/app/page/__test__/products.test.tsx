import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { renderRedux } from '../../../@redux/UtilsTest'

/** redux */
import { Actions } from '../../../@redux/Products'

/** pages */
import { Products, ProductsDetails } from '../Products'
import { Route, Routes } from 'react-router'

describe('Page Products', () => {
    const items = [
        {
            "id": "MLA1120025735",
            "title": "Apple iPhone 11 (64 Gb) - Blanco",
            "price": {
                "currency": "ARS",
                "amount": 199999.2,
                "decimals": 199999.2
            },
            "picture": "http://http2.mlstatic.com/D_809326-MLA46115014340_052021-I.jpg",
            "free_shipping": true,
            "condition": "new",
            "categories": []
        }
    ]
    it('Render Products', () => {
        const component = renderRedux(
            <Products />,
            Actions.setListProductsStore(items)
        )
                
        expect(component.container).toBeInTheDocument()
        component.getAllByTestId('btn-select-details').forEach(x => userEvent.click(x))
        expect(component.getAllByRole('listitem').length).toBe(1)
    })
})

describe('Page Products Details', () => {
    window.alert = jest.fn()
    // window.location.href = '/items/5'
    it('Render ProductsDetails', () => {
        const component = renderRedux(
            <ProductsDetails />
        )
        userEvent.click(component.getByTestId('btn-payment'))
        expect(component.container).toBeInTheDocument()
    })

    it('Render ProductsDetails loading', () => {
        const component = renderRedux(
            <ProductsDetails />,
            Actions.getStart()
        )
        
        expect(component.container).toBeInTheDocument()
    })
})