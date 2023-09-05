import axios from "axios";

const baseURL = 'https://nrthcoders-ncnews.onrender.com'
const api = axios.create({ baseURL });

export const fetchArticleList = () => {
  return api.get("/api/articles")
  .then(({data}) => {
    return data.articles;
  })
  .catch((err)=>{
  return Promise.reject(err.message)
  });
};


export const fetchArticleById = (article_id) => {

  return api.get(`/api/articles/${article_id}`)
  .then(({data}) => {
    return data.article;
  })
  .catch((err)=>{
  return Promise.reject(err.message)
  });
};

export const fetchCommentByArticleId=(article_id)=>{
  return api.get(`/api/articles/${article_id}/comments`)
  .then(({data}) => {
    return data.comments;
  })
  .catch((err)=>{
  return Promise.reject(err.message)
  });

}

export const voteArticle=(article_id,vote)=>{
  return api.patch(`/api/articles/${article_id}`,{"inc_votes":`${vote}`})
  .then(({data}) => {
    return data.article;
  })
  .catch((err)=>{
  return Promise.reject(err.message)
  });
}