import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, SET_FORM_DATA} from "./formTypes";

const initialState = {
    formData: {
        username: '',
        email: '',
    },
    password: 'mod7ReactUSIP',
    loginError: false,
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA: {
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,
                }
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                loginError: false,
                formData: action.payload.formData,
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                loginError: true,
            };
        }
        case LOGOUT: {
            return {
                ...state,
                formData: {username: '', email: ''},
            };
        }
        case 'RESET_LOGIN_ERROR':
            return {
                ...state,
                loginError: false
            };
        default:
            return state;
    }
};

export default formReducer;