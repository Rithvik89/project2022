import AuthActionTypes from "../actionTypes/Auth";
import { call, put, takeLatest ,all, delay} from "redux-saga/effects";
import { toast } from "react-toastify";
import {LoaderStart,LoaderStop} from "../actions/Loader"
import { SignInSuccess,SignInFailure,SignUpSuccess,SignUpFailure,LogoutSuccess,LogoutFailure } from "../actions/Auth";
import { SignUpApi,SignInApi,LogOutApi } from "../../Util/apis";
import Cookies from "js-cookie"

function* SignInIsStartASync(action){
    try{
        yield put(LoaderStart())
        const response=yield call(SignInApi,action.payload)
        console.log("response",response)
        if(response.code===401){
            yield put(SignInFailure())
            yield put(LoaderStop())
            toast.error("Invalid Credentials")
        }else{
            yield put(SignInSuccess())
            yield put(LoaderStop())
            console.log("responseToken",response)
            Cookies.set("Token",response.token,{expires: 1})
            toast.success("Login Successful")
        }
    }catch(e){
        // console.log(e)
        yield put(SignInFailure())
        yield put(LoaderStop())
        toast.error("Something Went Wrong")
    }
}

function* SignInIsStart(){
    yield takeLatest(AuthActionTypes.SIGNIN_START,SignInIsStartASync)
}

function* SignUpIsStartASync(action){
    try{
        yield put(LoaderStart())
        const response=yield call(SignUpApi,action.payload)
        if(response.code===404){
            yield put(SignUpFailure())
            yield put(LoaderStop())
            toast.error("Credentials already exits")
        }else{
             yield put(SignUpSuccess())
             yield put(LoaderStop())
             toast.success("Registration Successful")
        }  
    }catch(e){
        yield put(SignUpFailure())
        toast.error("Something Went Wrong")
    }
}

function* SignUpIsStart(){
    yield takeLatest(AuthActionTypes.SIGNUP_START,SignUpIsStartASync)
}

function* LogOutStartAsync(){
    try{
        yield put(LoaderStart())
        const x=yield call(LogOutApi)
        console.log(x)
        Cookies.remove("Token")
        yield put(LogoutSuccess())
        yield put(LoaderStop())
        toast.success("LogOut Successful")
    }catch(e){
        // console.log(e)
        yield put(LogoutFailure())
        toast.error("Something went wrong")
        yield put(LoaderStop())
    }
}

function* LogOutIsStart(){
    yield takeLatest(AuthActionTypes.LOGOUT_START,LogOutStartAsync)
}

export function* authSaga() {
    yield all([
      call(SignInIsStart),
      call(SignUpIsStart),
      call(LogOutIsStart)
    ]);
}