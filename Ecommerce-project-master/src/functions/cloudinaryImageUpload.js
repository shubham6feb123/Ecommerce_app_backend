import axios from "axios"

export const upload = async(uri,user)=>{

    return axios.post(
        `${process.env.REACT_APP_API}/uploadImages`,
        { image: uri },
        {
          headers: {
            email: user.email,
          },
        })


}