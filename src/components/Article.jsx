import { useEffect, useState } from "react";
import { fetchArticleById } from "../utils/api";
import { useParams } from "react-router-dom";
import { CommentsList } from "./CommentsList";
import { voteArticle } from "../utils/api";
import { useRef } from "react";
export const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasUpVoted, setHasUpVoted] = useState(false);
  const [hasDownVoted, setHasDownVoted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const upvote = useRef();
  const downvote = useRef();
  const { article_id } = useParams();
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

  const handleVoteClick = (e) => {
    const vote = e.target.value;
    if (vote > 0 && hasUpVoted) return;
    if (vote < 0 && hasDownVoted) return;
    setArticle((article) => {
      const newArticle = { ...article };
      newArticle.votes += +vote;
      return newArticle;
    });
    voteArticle(article_id, vote)
      .then((result) => {
        if (vote > 0) {

          setHasUpVoted(true);
          upvote.current.innerText= "😁";
          downvote.current.innerText="🔽"
          setHasDownVoted(false)
        } else {
          setHasDownVoted(true);
          downvote.current.innerText= "😔";
      upvote.current.innerText="🔼"
          setHasUpVoted(false)
        }
      })
      .catch((err) => {
        console.log(err);
        setArticle((article) => {
          const newArticle = { ...article };
          newArticle.votes += vote;
          return newArticle;
        });
        alert("vote not registered, try again");
      });
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <section className="main-article">
      <h3 className="article-title">{title}</h3>
      <img className="article-img" src={article_img_url} />
      <section className="author-created">
        <p className="author">
          By: <span className="mono">{author}</span>
        </p>
        <p className="created-at">
          on<span className="mono"> {created_at.split("T")[0]}</span>
        </p>
        <p className="article-topic">
          in <span className="mono">{topic}</span>
        </p>
        <p>
          <span className="mono">
            {votes} </span> vote{votes > 1 || votes === 0 || votes < -1 ? "s" : ""}
         
        </p>
        <button
          className="vote-button"
          ref={upvote}
          onClick={handleVoteClick}
          value="1"
        >
          🔼
        </button>
        <button
          className="vote-button"
          ref={downvote}
          onClick={handleVoteClick}
          value="-1"
        >
          🔽
        </button>
      </section>
      <section className="article-body">
        <p>{body}</p>
      </section>
      {comment_count>0?   <section className="comments">
        <CommentsList article_id={article_id} />
      </section>  : <p className="no-comments">No comments yet be the first to add a comment!</p> }

    </section>
  );
};
//
