import React from 'react'
import Header from '../../component/Header/Header'

import { Outlet } from 'react-router'


const Layout = () => {
    return(
        <>
            <Header />
            <main className='row justify-content-center'>
                <section className='bg-white rounded mb-4 mt-32 col-md-10'>
                    <Outlet />
                </section>
            </main>
        </>
    )
}

export default Layout;