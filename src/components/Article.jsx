import { useContext, useEffect, useState } from "react";
import { fetchArticleById } from "../utils/api";
import { useParams } from "react-router-dom";
import { CommentsList } from "./CommentsList";
import { VoteArticle } from "./VoteArticle";

import { AddComment } from "./AddComment";
import { ArticlesList } from "./ArticlesList";
import {WidthContext} from'../contexts/width-context'

export const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [commentsList,setCommentsList]=useState([])
  const[showComments,setShowComments]=useState(false)
  const [errorMsg, setErrorMsg] = useState("");
  const{width,setWidth}=useContext(WidthContext)


  const {article_id}=useParams()


  const {
    title,
    topic,
    article_img_url,
    author,
    body,
    comment_count,
    created_at,
    votes,
  } = article;


  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((msg) => {
        setIsLoading(false);
        setError(true);
        setErrorMsg(msg);
      });
      
  }, [article_id]);
  if (error) return <div className="error-msg">Error:{errorMsg}</div>;
  const handleToggle=(e)=>{
    showComments?setShowComments(false):setShowComments(true)
}
 
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
    <section className="main-article">
      <h3 className="article-title">{title}</h3>
      <img className="article-img" src={article_img_url} />
     
      <section className="article-body">
        <p>{body}</p>
      </section>
      <section className="author-created">
        <p className="author">
          By: <span className="mono">{author}</span>
        </p>
        <p className="created-at">
          on<span className="mono"> {new Date(created_at).toLocaleString()}</span>
        </p>
        <p className="article-topic">
          in <span className="mono">{topic}</span>
        </p>
        <VoteArticle article_id={article_id}votes={votes} setArticle={setArticle}/>
      </section>
<AddComment  setShowComments={setShowComments} article_id={article_id}setCommentsList={setCommentsList}/>

<button onClick={handleToggle}className="comments-label">{!showComments?"Show comments:":"Hide comments"}</button>

    </section>
    {comment_count > 0 ? (
        <section className="comments">
          <CommentsList article_id={article_id} commentsList={commentsList} setCommentsList={setCommentsList} showComments={showComments} setShowComments={setShowComments}/>
        </section>
      ) : (
        <p className="no-comments">
          No comments yet be the first to add a comment!
        </p>
      )}
      {width>600&&<ArticlesList/>}
    </>    
  );
};
//
