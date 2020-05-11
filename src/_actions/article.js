import { GET_ARTICLES } from "../constants/action-types";
import { API } from "../config/api";

export const getArticles = () => {
  return {
    type: GET_ARTICLES,
    async payload() {
      try {
        const articles = await API({
          method: 'post',
          data: {
              query: `
                query {
                  articles {
                    id
                    title
                    description
                  }
                }
              `
          }
        })
        return articles.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};