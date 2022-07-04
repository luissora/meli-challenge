import { putResolve, call, takeLatest } from 'redux-saga/effects'
import Actions from './actions'
import { TypesActions } from  './types'

/** api */
import { getItemsByQuery, getItemById } from '../../api/domain/items'

import { localStorage } from '../../helpers'


function* watchGetProductsByQuery(action: any){
    try {
        yield putResolve(Actions.getStart())

        const { data } = yield call(getItemsByQuery, action.query)

        yield putResolve(Actions.setListProductsStore(data.items))
    } catch (error) {
        console.warn('watchGetProductsByQuery', error)
        yield putResolve(Actions.getError('Se produjo un error en nuestros servicios.'))
    }finally{
        yield putResolve(Actions.getComplete())
    }
}

function* watchGetProductById(action: any){
    try {
        yield putResolve(Actions.getStart())

        const { data } = yield call(getItemById, action.id)

        yield putResolve(Actions.setProductStore(data.item))
        
    } catch (error) {
        console.warn('watchGetProductById', error)
        yield putResolve(Actions.getError('Se produjo un error en nuestros servicios.'))
    }finally{
        yield putResolve(Actions.getComplete())
    }
}

export default function* saga() {
    yield takeLatest(TypesActions.GET_PRODUCTS_BY_QUERY, watchGetProductsByQuery)
    yield takeLatest(TypesActions.GET_PRODUCTS_BY_ID, watchGetProductById)
}