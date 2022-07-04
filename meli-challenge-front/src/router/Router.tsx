import React from 'react'
import { Route, Routes } from 'react-router-dom'

/** pages */
import { Layout } from '../app/page/Layout'
import { Products, ProductsDetails } from '../app/page/Products'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='items' element={<Products />} />
                <Route path='items/:id' element={<ProductsDetails />} />
            </Route>
        </Routes>
    )
}

export default Router;