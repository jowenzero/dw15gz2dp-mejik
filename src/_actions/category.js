import { GET_CATEGORIES } from "../constants/action-types";
import { API } from "../config/api";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
    async payload() {
      try {
        const categories = await API({
          method: 'post',
          data: {
              query: `
                query {
                  categories {
                    id
                    name
                  }
                }
              `
          }
        })
        return categories.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};