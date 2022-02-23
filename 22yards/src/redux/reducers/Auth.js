import AuthActionTypes from "../actionTypes/Auth";

const INTIAL_STATE={
    isUserLoggedIn:false,
}

const AuthReducer=(state=INTIAL_STATE,action)=>{
    switch(action.type){
        case AuthActionTypes.SIGNIN_START:
        case AuthActionTypes.SIGNUP_START:
        case AuthActionTypes.LOGOUT_START:
            return{
                ...state,
            }
        case AuthActionTypes.SIGNIN_SUCCESSFUL:
        case AuthActionTypes.SIGNUP_SUCCESSFUL:
            return{
                ...state,
                isUserLoggedIn:true,
            }
        case AuthActionTypes.LOGOUT_FAILURE:
            return{
                ...state
            }
        case AuthActionTypes.LOGOUT_SUCCESSFUL:
        case AuthActionTypes.SIGNIN_FAILURE:
        case AuthActionTypes.SIGNUP_FAILURE:
            return{
                ...state,
                isUserLoggedIn:false
            }
        default:
            return state
    }
}

export default AuthReducer