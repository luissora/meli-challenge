// test-utils.jsx
import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { AnyAction, createStore } from 'redux'

import RootReducer from './RootReducers'
import { BrowserRouter, Routes } from 'react-router-dom'

const renderRedux = (children: React.ReactNode, action?: AnyAction) => {
    const dispatch = jest.fn()
    const store = createStore(RootReducer)
    if(action !== undefined)
        store.dispatch(action)
    
    return render(
        <Provider store={{...store, dispatch: dispatch }}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </Provider>
    )
}

export {
    renderRedux
}