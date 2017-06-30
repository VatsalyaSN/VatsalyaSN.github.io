import logger from 'redux-logger';
import rootReducer from './reducers/index';
import { createLogger } from 'redux-logger'
import {createStore, compose ,applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
// import listOfEvents from './data/listOfEvents';
import thunkMiddleware from 'redux-thunk';


const defaultState={
	reverse : {
		access_token : 0,
		agents : [],
		chat :[],
		authError : false
	}

}

const store = createStore(rootReducer,defaultState,applyMiddleware(
    logger, thunkMiddleware
  ));

store.subscribe(()=>
	console.log("store changed", store.getState()))

export default store;