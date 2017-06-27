/**
 * Created by Shikha on 27/06/17.
 */

import { createStore,combineReducers,applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import dataReducer from "./reducers/dataReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

//params reducer and state
//If reducer has a default value for state then we dont have to pass it in create store
export default  createStore(combineReducers({ dataReducer,userReducer}),
    {},
    applyMiddleware(logger,thunk)
)