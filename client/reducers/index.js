import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import reverseReducer from './reverseReducer';

const rootReducer = combineReducers({reverse:reverseReducer,
	routing:routerReducer});

export default rootReducer;