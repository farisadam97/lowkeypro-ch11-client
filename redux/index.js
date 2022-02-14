import { combineReducers, createStore } from 'redux'
import { rpsgameReducer } from './reducers/rpsgame.reducer'
import { statusGameReducer } from './reducers/statusgame.reducer'

const rootReducer = combineReducers({
    rpsGame: rpsgameReducer,
    statusGame: statusGameReducer
})

export const store = createStore(rootReducer)