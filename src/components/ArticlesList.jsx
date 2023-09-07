import { useState,useEffect } from "react"
import { fetchArticleList } from "../utils/api"
import {ArticlePreviewCard} from './ArticlePreviewCard'
import { useParams,useSearchParams } from "react-router-dom"


export const ArticlesList=({setArticle_id})=>{
    const [articlesList,setArticlesList]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(false)
    const [errorMsg,setErrorMsg]=useState("")
    const[searchParams,setSearchParams]=useSearchParams()
    const topic=searchParams.get("topic")

    useEffect(()=>{
        setIsLoading(true)
      
fetchArticleList(topic)
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
  <ol className="list">
{articlesList.map(articlePreview=>{
return <ArticlePreviewCard key={articlePreview.article_id} articlePreview={articlePreview} />
})}
</ol>

 
    )
}