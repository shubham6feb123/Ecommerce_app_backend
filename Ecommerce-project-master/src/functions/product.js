import axios from "axios"

export const Create = async(values,email)=>{
    // console.log("function product",values)
  return await axios.post(`${process.env.REACT_APP_API}/product`,values,{
      headers:{
          email:email
      }
  })
}

export const GetProductsByCount = async(count)=>{
  return await axios.get(`${process.env.REACT_APP_API}/products/${count}`)
}

export const DeleteProduct = async(slug)=>{
  return await axios.delete(`${process.env.REACT_APP_API}/products/${slug}`)
}

export const GetProduct = async(slug)=>{
  return await axios.get(`${process.env.REACT_APP_API}/product/${slug}`)
}

//get products by search text
export const GetBySearchText = async(text)=>{
  return await axios.post(`${process.env.REACT_APP_API}/search/filters`,text)
}

// module.exports = Create;
