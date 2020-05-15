import { useState } from 'react';

export const useHttp = ({url,...params}) => {
    const[state,setState] = useState({data: null,loading:false});
    setState(state => ({...state,data: true}));
        fetch(url,{
            method: params.method || 'get',
            body: params.body || null,
            headers: { 'Content-type': 'application/json' }
        }).then(result => result.json())
        .then(data => {
            setState({data,loading: false});
            return state;
        }).catch(err => {
            setState({data:null,error:err})
        })
    
} 