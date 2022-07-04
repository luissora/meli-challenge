import React, { useEffect } from 'react'
import { useParams } from 'react-router';

/** redux */
import { HelperRedux } from '../../../@redux';
import { Actions } from '../../../@redux/Products';

/** components */
import { Spinner } from '../../component/Spinner';

const ProductsDetails = () => {
    const params = useParams()
    const dispatch = HelperRedux.useDispatch()
    const { currentItem, isLoading } = HelperRedux.useSelector(state => state.products)
    useEffect(() => {
        if(params.id)
            dispatch(Actions.getProductById(params.id))
        
        return () => {
            dispatch(Actions.setProductStore())
        }
    }, [params.id])
    const handlerPayment = () => {
        alert('Comprado.! :)')
    }
    if(isLoading)
        return <Spinner visible />
    
    return(
        <>
            <section className='mt-32 pb-32 mb-32'>
                <div className='row justify-content-center'>
                    <div className='col-sm-7'>
                        <img src={currentItem?.picture} />
                    </div>
                    <div className='col-sm-3'>
                        <p className='mb-16' style={{ fontSize: '14px' }}>{currentItem?.condition.toUpperCase()} - {currentItem?.sold_quantity} vendidos</p>
                        <p className='mb-32 div-description-price'>{currentItem?.title}</p>
                        <p className='mb-32 div-description-price' style={{ fontSize: '46px' }}>$ {currentItem?.price.amount}</p>
                        <button data-testid='btn-payment' onClick={handlerPayment} className='btn btn-primary w-100 me-32'>Comprar</button>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-sm-10'>
                        <h2 className='mb-32 mt-32' style={{ fontSize: '28px' }}>Descripción del producto</h2>
                        <p style={{ fontSize: '16px' }}>{currentItem?.description}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductsDetails;