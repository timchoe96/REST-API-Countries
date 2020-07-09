import React from 'react';
import Border from './Border';
import {clickFlag,setSearch} from './actions/index.js';
import {useSelector,useDispatch} from 'react-redux';


const Detail = ({name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,flag}) => {
    const dispatch = useDispatch();
    const elementColor = useSelector(state => state.switching.elementColor);
    const textColor = useSelector(state => state.switching.textColor);
    
    const languageArray = [];

    const countryLanguages = () =>{
       return languages.map(language => {
           return language.name
        }).forEach((l,i) => {
            if(i+1 <= languages.length){
            languageArray.push(` ${l}`)
            }else{
                languageArray.push(l);
            }
        })
    }

    countryLanguages();

    const currenciesArray = [];

    const countryCurrencies = () => {
        return currencies.map(currency =>{
            return currency.name
        }).forEach((c,i) => {
            if(i+1 <= currencies.length){
            currenciesArray.push(` ${c}`)
            }else{
                currenciesArray.push(c);
            }
        })
    }

    countryCurrencies();

    function backClick(){
        dispatch(clickFlag(''))
        dispatch(setSearch(''))
    }

    
    return(
        <div className = 'Detail'>
             <div onClick={() => backClick()} className='back' style={{color:textColor,backgroundColor:elementColor}}>
                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                <div >Back</div>
             </div> 
             <div className='infoContainer'>
                <img src={flag} alt=''></img>
               {/* right info box */}
                    <div className='info'>
                        <h1 style={{color:textColor}}>{name}</h1> 
                        {/* middle info */}
                        <div className='infoDetail'>
                            <div className='leftInfo'>
                                <div style={{color:textColor}}>
                                    <strong>Native Name:</strong> {` ${nativeName}`}
                                </div>
                                <div style={{color:textColor}}>
                                    <strong>Population:</strong> {` ${Number(population).toLocaleString()}`}
                                </div>
                                <div style={{color:textColor}}>
                                    <strong>Region:</strong> {` ${region}`}
                                </div>
                                <div style={{color:textColor}}>
                                    <strong>Sub Region:</strong> {` ${subregion}`}
                                </div>
                                <div style={{color:textColor}}>
                                    <strong>Capital:</strong> {` ${capital}`}
                                </div>
                            </div>
                            <div className='rightInfo'>
                                 <div className='domain' style={{color:textColor}}>
                                    <strong>Top Level Domain:</strong> {` ${topLevelDomain}`}
                                </div>
                                <div className='currencies' style={{color:textColor}}>
                                    <strong>Currencies:</strong> {` ${currenciesArray.toString()}`}
                                </div>
                                <div className='languages' style={{color:textColor}}>
                                    <strong>Languages:</strong> {` ${languageArray.toString()}`}
                                </div>
                            </div>
                        </div>
                        {/* bottom border countries */}
                        <div className='borders' style={{color:textColor}}>
                        <strong>Border Countries:</strong>
                            {borders.length === 0?<div className='none'>None</div> :borders.map((border,i) => {
                                return <Border key={i} countryCode={border}/>
                            }) }
                        </div>
                    </div>

                
             </div>
        </div>
    )
}

export default Detail;