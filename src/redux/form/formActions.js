import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, RESET_LOGIN_ERROR } from "./formTypes";

const SECRET_KEY = 'mod7ReactUSIP';

export const saveFormData = (formData, password) => {
    return (dispatch) => {
        dispatch(resetLoginError());

        if (password === SECRET_KEY) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { formData },
            });
        } else {
            dispatch({ type: LOGIN_FAILURE });
        }
    };
};

export const logout = () => {
    return { type: LOGOUT };
};

export const resetLoginError = () => ({
    type: RESET_LOGIN_ERROR,
});
