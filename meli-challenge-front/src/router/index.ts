import React from 'react'
import Router from './Router'
import { useLocation } from 'react-router';

const useQuery = () => {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export {
    Router,
    useQuery
}