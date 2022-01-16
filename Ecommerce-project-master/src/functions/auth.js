import axios from "axios"

export const currentUser = async (email) => {
  return await axios.post(
    `http://localhost:8080/api/current-user`,
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
    `http://localhost:8080/api/current-admin`,
    {},
    {
      headers: {
        email: `${email}`,
      }
    }
  );
};
