import { GET_ARTICLES, GET_DETAIL_ARTICLE } from "../constants/action-types";
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

export const getDetailArticle = (id) => {
  return {
    type: GET_DETAIL_ARTICLE,
    async payload() {
      try {
        const articles = await API({
          method: 'post',
          data: {
              query: `
                query {
                  article (id: "${id}") {
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