import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from './reducers/users'
import { counterReducer } from './reducers/counters'

const rootReducer = combineReducers({
    users: userReducer,
    counters: counterReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))