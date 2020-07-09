import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {requestCountries} from './actions/index.js';
import Nav from './Nav';
import Search from './Search';
import Flags from './Flags';
import Scroll from './Scroll';
import Detail from './Detail';

const App = () => {

const countries = useSelector(state => state.fetchCountries.countries)
const dispatch = useDispatch();
const backgroundColor = useSelector(state => state.switching.backgroundColor);
const countryName = useSelector(state => state.countryDetail);
const detailFlag = () => {
    return countries.filter(f => {
       return f.name.includes(countryName);
    })
}


if (countries.length === 0){
    dispatch(requestCountries())
    return(<div><h1>Loading...</h1></div>)
}else if(countryName.length !== 0){
    
    return(
        <div className='bodyTwo' style={{backgroundColor:backgroundColor}}> 
           <Nav/>
           <Detail name={detailFlag()[0].name} nativeName={detailFlag()[0].nativeName} population={detailFlag()[0].population} region={detailFlag()[0].region} subregion={detailFlag()[0].subregion} capital={detailFlag()[0].capital} topLevelDomain={detailFlag()[0].topLevelDomain} currencies={detailFlag()[0].currencies} languages={detailFlag()[0].languages} borders={detailFlag()[0].borders} flag={detailFlag()[0].flag}/>               
        </div>
    )
}
else{
    return(
        <div className='body' style={{backgroundColor:backgroundColor}}> 
           <Nav/>
           <Search/>
           <Scroll>
                <Flags/>
           </Scroll>
        </div>
    )
}
}

export default App;