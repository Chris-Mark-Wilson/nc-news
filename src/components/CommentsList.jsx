import { useState,useEffect } from "react"

export const CommentsList=({article_id})=>{
const [commentsList,setCommentsList]=useState([])
    useEffect(()=>{
fetchAllComments()
.then((comments)=>{
    setCommentsList(comments)
})
    },[])
    return (
        <ol className="list">
        {articlesList.map(articlePreview=>{
        return <ArticlePreviewCard key={articlePreview.article_id} articlePreview={articlePreview} />
        })}
        </ol>
    )
}