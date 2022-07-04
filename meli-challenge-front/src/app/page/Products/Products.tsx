import React, { useEffect } from 'react'
import { useQuery } from '../../../router' 

import { Spinner } from '../../component/Spinner'
import { useNavigate, Navigate } from 'react-router'

/** redux */
import { HelperRedux } from '../../../@redux'
import { Actions } from '../../../@redux/Products'

import './styles.css'

/** icons */
import IconShipping from '../../../assets/icons/icon-shipping.png'

const Products = () => {
    const dispatch = HelperRedux.useDispatch()
    const navigate = useNavigate()
    const query = useQuery().get('search')
    const { data, isLoading } = HelperRedux.useSelector(state => state.products)
    useEffect(() => {
        if(query)
            dispatch(Actions.getProductsByQuery(query))
        else
            navigate('/')

        return () => {
            dispatch(Actions.setListProductsStore([]))
        }

    }, [query])
    const handlerRedirectDetails = (value: string) => {
        navigate('/items/' + value)
    }
        
    return(
        <>
            <Spinner visible={isLoading} />
            <ol>
                {data.map(x => 
                    <li key={x.id} className='d-flex li-container p-16'>
                        <div data-testid='btn-select-details' className='cursor-pointer' onClick={() => handlerRedirectDetails(x.id)}>
                            <img className='img-item' src={x.picture} />
                        </div>
                        <div className='div-description ms-4 pt-3'>
                            <div className='d-flex align-content-center mb-32'>
                                <p data-testid='btn-select-details' onClick={() => handlerRedirectDetails(x.id)} className='div-description-price cursor-pointer'>$ {x.price.amount}</p>
                                {x.free_shipping && <img className='mt-2 ms-2' height={'18px'} width={'18px'} src={IconShipping} />}
                            </div>
                            <h3 data-testid='btn-select-details' onClick={() => handlerRedirectDetails(x.id)} className='div-description-title cursor-pointer'>{x.title}</h3>
                            <p>{x.condition}</p>
                        </div>
                    </li>
                )}
            </ol>
        </>
    )
}

export default Products;