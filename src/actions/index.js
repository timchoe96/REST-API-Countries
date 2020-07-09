
export const requestCountries = () => (dispatch) => {
    dispatch({type:'REQUEST_COUNTRIES_PENDING'});
    fetch('https://restcountries.eu/rest/v2/all')
    .then(resp => resp.json())
    .then(data => dispatch({type:'REQUEST_COUNTRIES_SUCCESS', payload:data}))
    .catch(error => dispatch({type:'REQUEST_COUNTRIES_FAILED', payload:error}))
}

export const switchColor = (color) => {
    if (color === 'hsl(200, 15%, 8%)'){
        return {
        type: 'DARK'
        }
    }else{
        return {
        type: 'LIGHT'
        }
    }
}

export const setLocation = (location) => {
    return {
        type:'LOCATION',
        payload:location
    }
}

export const setSearch = (search) => {
    return{
        type:'COUNTRY',
        payload: search
    }
}

export const clickFlag = (name) => {
    return{
        type:'FLAG',
        payload: name
    }
}

