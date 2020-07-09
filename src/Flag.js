import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {clickFlag} from './actions/index.js';

const Flag = ({name,flag,population,region,capital}) => {
    const elementColor = useSelector(state => state.switching.elementColor);
    const textColor = useSelector(state => state.switching.textColor);
   
    const dispatch = useDispatch();
 

    return (
        <div onClick={() => dispatch(clickFlag(name))} style={{backgroundColor:elementColor}} className='Flag'>
            <img alt='' src={flag}></img>
            <div style={{color:textColor}} className='info'>
                <h4>{name}</h4>
                <div ><strong>Population:</strong> {` ${Number(population).toLocaleString()}`}</div>
                <div><strong>Region:</strong> {` ${region}`}</div> 
                <div><strong>Capital:</strong> {` ${capital}`}</div>
            </div>

        </div>
    )
}

export default Flag;