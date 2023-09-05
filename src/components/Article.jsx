import { useEffect, useState } from "react";
import { fetchArticleById } from "../utils/api";
import { useParams } from 'react-router-dom';
import { CommentsList } from "./CommentsList";
export const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const {article_id}=useParams();
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
  }, []);
  if (error) return <div className="error-msg">Error:{errorMsg}</div>;

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <section className="main-article">
      <h3 className="article-title">{title}</h3>
      <img className="article-img" src={article_img_url} />
      <section className="author-created">
        <p className="author">Written by: <span className="mono">{author}</span></p>
        <p className="created-at">on<span className="mono"> {created_at.split("T")[0]}</span></p>
        <p className="article-topic">in <span className="mono">{topic}</span></p>
      </section>
      <section className="article-body">
        <p>{body}</p>
      </section>
      <section className="comments">
        <CommentsList article_id={article_id}/>
      </section>
    </section>
  );
};
//
