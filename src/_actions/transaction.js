import { GET_TRANSACTIONS } from "../constants/action-types";
import { API, setAuthToken } from "../config/api";

export const getTransactions = () => {
  return {
    type: GET_TRANSACTIONS,
    async payload() {
      try {
        const token = localStorage.getItem('userToken');
        setAuthToken(token);
        const transactions = await API({
          method: 'post',
          data: {
              query: `
                query {
                  transactions {
                    id
                    amount
                    timeline
                    total
                    beneficiary {
                      id
                      firstName
                      lastName
                    }
                  }
                }
              `
          }
        })
        return transactions.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};