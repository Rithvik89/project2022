import { BASE_URL } from "./util";

//News API
export const APIforNews=async (pageNo)=>{
   // console.log("pageNo",pageNo)
    const res=await fetch(`https://newsdata.io/api/1/news?apikey=pub_416595014f421b1f81b9744d76817e9a10f5&category=sports&q=cricket&page=${pageNo}`,{method:"GET"})
    const response=await res.json();
    return response
}

//Sign UP Api
export const SignUpApi=async (userDetails)=>{
    const res=await fetch(`${BASE_URL}/register`,{
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
    const response=await res.json()
    return response
}

//Sign In Api
export const SignInApi=async (userDetails)=>{
    const res=await fetch(`${BASE_URL}/login`,{
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
    const response=await res.json()
    return response
}

//Logout Api
export const LogOutApi=async ()=>{
    const res=await fetch(`${BASE_URL}/logout`)
    const response=await res.json()
    return response
}