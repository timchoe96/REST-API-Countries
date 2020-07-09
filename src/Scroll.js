import React from 'react';

const Scroll = (props) => {
    return (
        <div className='Scroll' style={{overflow:'scroll',height:'528px'}}>
        {props.children}
        </div>
    )
}

export default Scroll;