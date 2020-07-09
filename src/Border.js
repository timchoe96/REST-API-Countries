import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {clickFlag} from './actions/index.js';

const Border = ({countryCode}) => {
    const elementColor = useSelector(state => state.switching.elementColor);
    const textColor = useSelector(state => state.switching.textColor);
    const countries = useSelector(state => state.fetchCountries.countries)
    const dispatch = useDispatch();

    function filterCountries(){
       return countries.filter(country => {
         return country.alpha3Code.includes(countryCode)   
        })
    }

    const country = filterCountries()[0];

    

    return(
        <div onClick={() => dispatch(clickFlag(country.name))} style={{color:textColor,backgroundColor:elementColor}}className='border'>
            {country.name}
        </div>
    )
}

export default Border;