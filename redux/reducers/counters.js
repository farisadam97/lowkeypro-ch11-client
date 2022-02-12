import { INCREMENT_COUNTER } from '../constants/counters'

var total_score = 0;
if (typeof window !== 'undefined') {
	total_score = Number(localStorage.getItem('total_score'));
}

export const initialState = {
    value: total_score,
    maxQty: 10000,
    minQty: 0
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            if (state.value === state.maxQty) {
                action.payload = 0
            }

            return {
                ...state,
                value: state.value + action.payload
            }
        default:
            return state
    }
}