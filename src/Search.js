import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Dropdown from './Dropdown';
import {setSearch} from './actions/index.js';


const Search = () => {

    const dispatch = useDispatch();
    const inputColor = useSelector(state => state.switching.inputColor)
    const elementColor = useSelector(state => state.switching.elementColor);
    const inputClass = useSelector(state => state.switching.inputClass);
    const textColor = useSelector(state => state.switching.textColor);

    return(
        <div className ='search'>
            <div className='searchBar' style={{backgroundColor:elementColor}}>
            <i style={{color:inputColor}} className="fa fa-search" aria-hidden="true"></i>
            <input onChange={(event) => dispatch(setSearch(event.target.value))} className={inputClass} style={{backgroundColor:elementColor,color:textColor}}type='text' placeholder='Search for a country...'></input>
            </div>
            <Dropdown/>
         </div>
    )
}

export default Search;