import {fetchCountries} from './countries';
import {combineReducers} from 'redux';
import {switching} from './switch';
import {filter} from './filter.js';
import {searchResult} from './search.js';
import {countryDetail} from './countryDetail.js';

export const rootReducer = combineReducers({fetchCountries,switching,filter,searchResult,countryDetail});