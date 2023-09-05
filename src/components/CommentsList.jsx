import { useState,useEffect } from "react"
import { CommentCard } from "./CommentCard"
import { fetchCommentByArticleId } from "../utils/api"

export const CommentsList=({article_id})=>{
const [commentsList,setCommentsList]=useState([])
const[isLoading,setIsLoading]=useState(true)
const [errorMsg,setErrorMsg]=useState("")
const [error,setError]=useState(false)
    useEffect(()=>{
        setIsLoading(true)
fetchCommentByArticleId(article_id)
.then((comments)=>{
    setCommentsList(comments)
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
    return isLoading?<div>Loading comments...</div>:(
        <>
        <h4 className="comments-label">Comments:</h4>
        <ol className="list">
        {commentsList.map(comment=>{
        return <CommentCard key={comment.comment_id} comment={comment} />
        })}
        </ol>
        </>
    )
}