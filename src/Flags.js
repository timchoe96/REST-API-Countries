import React from 'react';
import {useSelector} from 'react-redux';
import Flag from './Flag';

const Flags = () => {
    const countries = useSelector(state => state.fetchCountries.countries);
    const region = useSelector(state => state.filter);
    const search = useSelector(state => state.searchResult);
    const textColor = useSelector(state => state.switching.textColor);
    
    const filteredCountries = () => {
    if(region !== 'All'&& region !== 'Filter by Region'){
    return countries.filter(country=>{
       return country.region.toLowerCase().includes(region.toLowerCase())
    })
    }  else{
        return countries
    }
    }

    const searchFiltered = () => {
        return filteredCountries().filter(country => {
            return country.name.toLowerCase().includes(search.toLowerCase())
        }) 
    }


    if(searchFiltered().length !== 0){
    return(
        <div className='Flags'>
            {searchFiltered().map((country,i) => {
              return  <Flag key={i} name={country.name} flag={country.flag} population={country.population} region={country.region} capital={country.capital}/>
            })}
        </div>
    )}else{
    return (
        <div style={{color:textColor}}className='noFlags'>Sorry, cannot find your search.</div>
    )
    }
}

export default Flags;