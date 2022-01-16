import axios from "axios"

export const Create = async (coupon, email) => {
  // console.log("coupon",coupon)
  return await axios.post(
    `${process.env.REACT_APP_API}/coupon/create`,
    coupon,
    {
      headers: {
        email: email,
      },
    }
  );
};

export const Remove = async (couponId, email) => {
  return await axios.delete(
    `${process.env.REACT_APP_API}/coupon/remove/${couponId}`,
    {
      headers: {
        email: email,
      },
    }
  );
};

export const List = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/coupon/list`);
};

export const verifyCoupon = async (code, authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/coupon/verify`,
    { verify: code },
    {
      headers: {
        authtoken: authtoken,
      },
    }
  );
};

export const createOrder = async (stripeResponse, authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/user/order`,
    { stripeResponse: stripeResponse },
    {
      headers: {
        authtoken: authtoken,
        message:"order create kr rhe h"
      },
    }
  );
};
