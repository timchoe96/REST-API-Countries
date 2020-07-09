import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {setLocation,setSearch} from './actions/index.js';

const Dropdown = () => {
    const dispatch = useDispatch();
    const region = useSelector(state => state.filter)
    const elementColor = useSelector(state => state.switching.elementColor);
    const textColor = useSelector(state => state.switching.textColor);

    function dropClick(country){
        dispatch(setLocation(country))
        dispatch(setSearch(''))
    }

    return(
        <div className='dropDown'>
            <button style={{backgroundColor:elementColor,color:textColor}} className='defaultOption'>
                <p>{region}</p>
                <i className="fa fa-angle-down" aria-hidden="true"></i>
            </button>
            <div style={{backgroundColor:elementColor,color:textColor}} className='list'>
                <ul>
                    <li onClick={() => dropClick('Africa')}>
                       <button  style={{color:textColor}} >Africa</button> 
                    </li>
                    <li onClick={() => dropClick('Americas')}>
                        <button  style={{color:textColor}}  >Americas</button>
                    </li>
                    <li onClick={() => dropClick('Asia')}>
                       <button  style={{color:textColor}} > Asia</button>
                    </li>
                    <li onClick={() => dropClick('Europe')}>
                       <button  style={{color:textColor}} >Europe</button> 
                    </li>
                    <li onClick={() => dropClick('Oceania')}>
                       <button  style={{color:textColor}}  > Oceania</button> 
                    </li>
                    <li onClick={() => dropClick('All')}>
                       <button  style={{color:textColor}}  > All</button> 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Dropdown;

