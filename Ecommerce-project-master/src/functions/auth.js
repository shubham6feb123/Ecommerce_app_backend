import axios from "axios"

export const currentUser = async (email) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/current-user`,
    {},
    {
      headers: {
        email: `${email}`,
      }
    }
  );
};

export const currentAdmin = async (email) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/current-admin`,
    {},
    {
      headers: {
        email: `${email}`,
      }
    }
  );
};
