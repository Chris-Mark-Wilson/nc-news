import { useState,useEffect } from "react"
import { fetchArticleList } from "../utils/api"
import {ArticlePreviewCard} from './ArticlePreviewCard'
import { useParams,useSearchParams } from "react-router-dom"
import { SortBar } from "./SortBar"
import { Article } from "./Article"
import { useContext } from "react"
import { WidthContext } from "../contexts/width-context"


export const ArticlesList=({setArticle_id})=>{
    const [articlesList,setArticlesList]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(false)
    const [errorMsg,setErrorMsg]=useState("")
    const[searchParams,setSearchParams]=useSearchParams()
    const topic=searchParams.get("topic")
    const [sortBy,setSortBy]=useState("created_at")
    const[order,setOrder]=useState("DESC")
    const {width,setWidth}=useContext(WidthContext)
 
    useEffect(()=>{
        
        const params=new URLSearchParams(searchParams)
        params.set('order',order)
        params.set('sort_by',sortBy)
        setSearchParams(params)
        setIsLoading(true)
   
fetchArticleList(topic,sortBy,order)
.then((list)=>{
    setArticlesList(list)
    
   
    
    setIsLoading(false)

})
.catch((msg)=>{
    setIsLoading(false)
    setError(true)
    setErrorMsg(msg)
})
    },[sortBy,order])



    if(error)return(
        <div className="articles-list error-msg">Error:{errorMsg}</div>
    )

    return isLoading?<div className="articles-list">Loading...</div>:
   (
   <><div className="articles-list">
    <SortBar sortBy={sortBy} setSortBy={setSortBy}  order={order} setOrder={setOrder}/>
  <ol className="list">
{articlesList.map(articlePreview=>{
return <ArticlePreviewCard key={articlePreview.article_id} articlePreview={articlePreview} />
})}
</ol>
</div>

</>

 
    )
}