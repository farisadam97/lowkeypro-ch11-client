import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from './reducers/users'
import { counterReducer } from './reducers/counters'
import { rpsgameReducer } from './reducers/rpsgame.reducer'
import { statusGameReducer } from './reducers/statusgame.reducer'

const rootReducer = combineReducers({
    users: userReducer,
    counters: counterReducer,
    rpsGame: rpsgameReducer,
    statusGame: statusGameReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))