import React from 'react';
import {switchColor} from './actions/index.js';
import {useSelector,useDispatch} from 'react-redux';




const Nav = () => {

    const textColor = useSelector(state => state.switching.textColor);
    const elementColor = useSelector(state => state.switching.elementColor);
    const dispatch = useDispatch();

    return(
        <div className='nav' style={{backgroundColor:elementColor}}>
            <h3 style={{color:textColor}}>Where in the world?</h3>
            <div className='rightNav' onClick={()=> dispatch(switchColor(textColor))}>
                <i style={{color:textColor}} className="fa fa-moon-o" aria-hidden="true"></i>
                <p style={{color:textColor}}>Dark Mode</p>
            </div>
     </div>
    )
}

export default Nav;