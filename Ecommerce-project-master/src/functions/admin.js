import axios from "axios"

export const getOrders = async(authtoken,email)=>{
return await axios.post(`${process.env.REACT_APP_API}/admin/orders`,{},
{
    headers:{
        email:email,
        authtoken:authtoken,
    }
})
}

export const changeStatus = async(authtoken,email,orderId,orderStatus)=>{
    return await axios.put(`${process.env.REACT_APP_API}/admin/order-status`,{orderId,orderStatus},
    {
        headers:{
            email:email,
            authtoken:authtoken,
        }
    })
    }