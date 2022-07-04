import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'

/** icons */
import IconSearch from '../../../assets/icons/icon-search.png'
import Logo from '../../../assets/icons/logo-ml.png'

/** styles */
import './styles.css'


const Header = () => {
    const [valueSearch, setValueSearch] = useState('')
    const navigate = useNavigate()
    const handlerOnSearchInput = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter'){
            handlerOnSearch()
        }
    }
    const handlerOnSearch = () => {
        if(!valueSearch)
            return
        
        navigate('items/?search=' + valueSearch)
    }
    return(
        <header className='header-container border row justify-content-center'>
            <div className='container-fluid header-content col-md-10'>
                <img data-testid='btn-home' onClick={() => navigate('/')} className='me-4 cursor-pointer' src={Logo} />
                <div className="input-group">
                    <input onKeyDown={handlerOnSearchInput} onChange={(e) => setValueSearch(e.target.value)} value={valueSearch} placeholder='Nunca dejes de buscar' type="text" className="form-control header-input-search" id="inputGroupFile02" />
                    <button data-testid='btn-search' onClick={() => handlerOnSearch()} className="input-group-text header-btn-search">
                        <img src={IconSearch} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;