import { ADD_STATUS } from "../constants/statusgame.constatn";


export const addStatusGame = (payload) => {
    return {
        type: ADD_STATUS,
        payload
    }
}