import { GET_USER } from "../constants/action-types";
import { API, setAuthToken } from "../config/api";

export const getUser = () => {
  return {
    type: GET_USER,
    async payload() {
      try {
        const token = localStorage.getItem('userToken');
        setAuthToken(token);
        const user = await API({
          method: 'post',
          data: {
              query: `
                query {
                  user {
                    id
                    firstName
                    lastName
                    email
                    phoneNumber
                    role
                  }
                }
              `
          }
        })
        return user.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};