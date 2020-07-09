
export const fetchCountries = (state={isPending:false,countries:[],error:''},action) => {
    
    switch(action.type){
        case 'REQUEST_COUNTRIES_PENDING':
        return {...state,isPending:true}

        case 'REQUEST_COUNTRIES_SUCCESS':
        return {...state,countries:action.payload}

        case 'REQUEST_COUNTRIES_FAILED':
        return {...state,error:action.payload}

        default:
        return state;
    }
}
