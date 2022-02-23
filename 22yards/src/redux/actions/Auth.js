import AuthActionTypes from "../actionTypes/Auth";

export const SignInStart=(SiginCredentials)=>({
   type:AuthActionTypes.SIGNIN_START,
   payload:SiginCredentials  
})

export const SignInSuccess=()=>({
    type:AuthActionTypes.SIGNIN_SUCCESSFUL,
})

export const SignInFailure=()=>({
    type:AuthActionTypes.SIGNIN_FAILURE,
})

export const SignUpStart=(SiginCredentials)=>({
    type:AuthActionTypes.SIGNUP_START,
    payload:SiginCredentials  
 })
 
export const SignUpSuccess=()=>({
     type:AuthActionTypes.SIGNUP_SUCCESSFUL,
})
 
export const SignUpFailure=()=>({
     type:AuthActionTypes.SIGNUP_FAILURE,
})

export const LogoutStart=()=>({
     type:AuthActionTypes.LOGOUT_START
})

export const LogoutSuccess=()=>({
     type:AuthActionTypes.LOGOUT_SUCCESSFUL,
})

export const LogoutFailure=()=>({
    type:AuthActionTypes.LOGOUT_FAILURE
})