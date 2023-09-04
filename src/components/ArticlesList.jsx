import { useState,useEffect } from "react"
import { fetchArticleList } from "../utils/fetchArticleList"
import {ArticleCard} from '../components/ArticleCard'
import { Container } from "./Container"

export const ArticlesList=()=>{
    const [articlesList,setArticlesList]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(false)
    const [errorMsg,setErrorMsg]=useState("")

    useEffect(()=>{
        setIsLoading(true)
fetchArticleList()
.then((list)=>{
    setArticlesList(list)
    setIsLoading(false)
})
.catch((msg)=>{
    setIsLoading(false)
    setError(true)
    setErrorMsg(msg)
})
    },[])
    if(error)return(
        <div className="error-msg">Error:{errorMsg}</div>
    )

    return isLoading?<div>Loading...</div>:
   (
  <ol>
{articlesList.map(article=>{
return <ArticleCard key={article.article_id} article={article}/>
})}
</ol>

 
    )
}