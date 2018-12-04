import {createStore} from '../../../../AppData/Local/Microsoft/TypeScript/3.1/node_modules/redux';
import {applyMiddleware} from '../../../../AppData/Local/Microsoft/TypeScript/3.1/node_modules/redux';
import thunk from 'redux-thunk';

const initialState = {};
const  middleware =[thunk];
const store = createStore(
    rootReducer,
     initialState,
     applyMiddleware(...middleware));






export default store;