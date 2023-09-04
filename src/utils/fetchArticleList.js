import axios from "axios";




export const fetchArticleList = () => {


    const baseURL = 'https://nrthcoders-ncnews.onrender.com'
    const api = axios.create({ baseURL });

  return api.get("/api/articles")
  .then(({data}) => {
   
    return data.articles;
  })
  .catch((err)=>{

  return Promise.reject(err.message)
  });
};
