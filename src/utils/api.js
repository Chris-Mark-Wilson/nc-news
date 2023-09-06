import axios from "axios";

const baseURL = "https://nrthcoders-ncnews.onrender.com";
const api = axios.create({ baseURL });

export const fetchArticleList = () => {
  return api
    .get("/api/articles")
    .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => {
      if (err.response.data.error) {
        return Promise.reject(err.response.data.error);
      } else return Promise.reject(err.message);
    });
};

export const fetchArticleById = (article_id) => {
  return api
    .get(`/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch((err) => {
      if (err.response.data.error) {
        return Promise.reject(err.response.data.error);
      } else return Promise.reject(err.message);
    });
};

export const fetchCommentByArticleId = (article_id) => {
  return api
    .get(`/api/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    })
    .catch((err) => {
      if (err.response.data.error) {
        return Promise.reject(err.response.data.error);
      } else return Promise.reject(err.message);
    });
};

export const voteArticle = (article_id, vote) => {
  return api
    .patch(`/api/articles/${article_id}`, { inc_votes: `${vote}` })
    .then(({ data }) => {
      return data.article;
    })
    .catch((err) => {
      if (err.response.data.error) {
        return Promise.reject(err.response.data.error);
      } else return Promise.reject(err.message);
    });
};
export const postComment = (article_id, username, body) => {
  return api
    .post(`/api/articles/${article_id}/comments`, {
      username: `${username}`,
      body: `${body}`,
    })
    .then(({ data }) => {
      return data.comment;
    })
    .catch((err) => {
      if (err.message === "Network Error") {
        return Promise.reject(err.message);
      } else {
        return Promise.reject(err.response.data.error);
      }
    });
};
