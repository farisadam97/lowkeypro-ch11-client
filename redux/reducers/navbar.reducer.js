import { ADD_NAVBAR_STATUS } from "../constants/navbar.constant"

let statusLogin = "";
if (typeof window !== 'undefined') {
    statusLogin = localStorage.getItem('status');
}

export const initialState = {
    status: statusLogin  
}


export const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NAVBAR_STATUS:
            return {
                ...state,
                    ...state = action.payload
            }
        default:
            return state
    }
}