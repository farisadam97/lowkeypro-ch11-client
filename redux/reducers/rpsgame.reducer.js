import { ADD_SCORE, RESET_GAME } from "../constants/rpsgame.constant";

export const initialState = {
        userselection: "",
        pcselection: "",
        round: 0,
        userscore: 0,
        pcscore: 0,
        message: ""
}


export const rpsgameReducer = (state = initialState, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case ADD_SCORE:
            return {
                ...state,

                  ...state = action.payload
            }
        case RESET_GAME:
            return {
                ...state,
                ...state = action.payload
            }
        default:
            return state
    }
}