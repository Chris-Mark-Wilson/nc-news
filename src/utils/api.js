import axios from "axios";

const baseURL = "https://nrthcoders-ncnews.onrender.com";
const api = axios.create({ baseURL });

export const fetchArticleList = (topic,sortBy,order) => {
  let queryString="/api/articles"
  if(topic || sortBy || order)queryString+=`?`
  if(topic)queryString+=`topic=${topic}`
  if(sortBy)queryString+=`&sort_by=${sortBy}`
  if(order)queryString+=`&order=${order}`

  return api
    .get(queryString)
    .then(({ data }) => {

      return data.articles;
    })
    .catch((err) => {
  return Promise.reject(err.message);
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
export const fetchAllTopics=()=>{
  return api.get('/api/topics')
  .then(({data})=>{
return data.topics
  })
  .catch((err) => {
    if (err.message === "Network Error") {
      return Promise.reject(err.message);
    } else {
      if(err.response.data.error){
      return Promise.reject(err.response.data.error)}
    else {
      return Promise.reject(err.message)}
  }
  });
}

export const deleteComment=(comment_id)=>{
  return api.delete(`/api/comments/${comment_id}`)
  .then((response)=>{
return response;
  })
  .catch((err) => {
    if (err.message === "Network Error") {
      return Promise.reject(err.message);
    } else {
      if(err.response.data.error){
      return Promise.reject(err.response.data.error)}
    else {
      return Promise.reject(err.message)}
  }
  });
}