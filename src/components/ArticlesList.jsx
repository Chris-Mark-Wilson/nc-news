import { useState,useEffect } from "react"
import { fetchArticleList } from "../utils/api"
import {ArticlePreviewCard} from './ArticlePreviewCard'


export const ArticlesList=({setArticle_id})=>{
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
{articlesList.map(articlePreview=>{
return <ArticlePreviewCard key={articlePreview.article_id} articlePreview={articlePreview} setArticle_id={setArticle_id}/>
})}
</ol>

 
    )
}