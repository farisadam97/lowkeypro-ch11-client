import { combineReducers, createStore } from 'redux'
// import { todosReducer } from './reducers/todos'
// import { userReducer } from './reducers/user.reducer'

const rootReducer = combineReducers({
    // todos: todosReducer,
    // user: userReducer
})

export const store = createStore(rootReducer)