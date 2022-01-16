import axios from "axios"

export const getUserOrders = async(authtoken)=>{
    return await axios.post(`${process.env.REACT_APP_API}/user/orders`,{},{
        headers:{
            authtoken:authtoken
        }
    })
}