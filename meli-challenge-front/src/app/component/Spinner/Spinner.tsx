import React from 'react'

import './styles.css'

const Spinner: React.FunctionComponent<{ visible: boolean }> = ({ visible }) => {
    
    if(!visible) 
        return null
    
    return (
        <div className="spinner-container">
            <div className="spinner-border text-white spinner" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner;