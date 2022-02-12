import { ADD_SCORE, RESET_GAME } from "../constants/rpsgame.constant"

export const addScoreUser = (payload) => {
    return {
        type: ADD_SCORE,
        payload
    }
}

export const resetGame = (payload) => {
    return {
        type: RESET_GAME,
        payload
    }
}