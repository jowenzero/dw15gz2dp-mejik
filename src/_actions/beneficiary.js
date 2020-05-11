import { GET_BENEFICIARIES } from "../constants/action-types";
import { API } from "../config/api";

export const getBeneficiaries = () => {
  return {
    type: GET_BENEFICIARIES,
    async payload() {
      try {
        const beneficiaries = await API({
          method: 'post',
          data: {
              query: `
                query {
                  beneficiaries {
                    id
                    firstName
                    lastName
                  }
                }
              `
          }
        })
        return beneficiaries.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};