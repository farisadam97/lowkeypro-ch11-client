import { ADD_NAVBAR_STATUS } from "../constants/navbar.constant"
import { postLoginAxios } from "../../services/auth.service"
import { useDispatch } from "react-redux";

export const addNavbarStatus = (payload) => {
    return {
        type: ADD_NAVBAR_STATUS,
        payload
    }
}

export const  postLoginAction = (data) => async (dispatch) => {
    await postLoginAxios(data);
    
    let statusLogin = {
        status: localStorage.getItem("status")
    }

    return dispatch(
        addNavbarStatus(statusLogin)
    )
}