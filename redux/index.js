import { combineReducers, createStore } from 'redux'
import { rpsgameReducer } from './reducers/rpsgame.reducer'

const rootReducer = combineReducers({
    rpsGame: rpsgameReducer,
})

export const store = createStore(rootReducer)