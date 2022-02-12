import { INCREMENT_COUNTER } from "../constants/counters"

export const incrementCounterAction = () => {
    return {
        type: INCREMENT_COUNTER,
        payload: 1
    }
}