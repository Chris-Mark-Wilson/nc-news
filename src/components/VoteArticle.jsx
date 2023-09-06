import { voteArticle } from "../utils/api";
import { useRef } from "react";
import { useState } from "react";
export const VoteArticle = ({ article_id, votes,setArticle }) => {
  const upvote = useRef();
  const downvote = useRef();
  const [hasUpVoted, setHasUpVoted] = useState(false);
  const [hasDownVoted, setHasDownVoted] = useState(false);
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
          if (hasDownVoted) {
            setHasUpVoted(false);
            setHasDownVoted(false);
            upvote.current.innerText = "🔼";
            downvote.current.innerText = "🔽";
          } else {
            setHasUpVoted(true);
            upvote.current.innerText = "😁";
            downvote.current.innerText = "🔽";
            setHasDownVoted(false);
          }
        } 
        //downvote
        else {
          if (hasUpVoted) {
            setHasDownVoted(false);
            setHasUpVoted(false);
            downvote.current.innerText = "🔽";
            upvote.current.innerText = "🔼";
          } else {
            setHasDownVoted(true);
            downvote.current.innerText = "😔";
            upvote.current.innerText = "🔼";
            setHasUpVoted(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setArticle((article) => {
          const newArticle = { ...article };
          newArticle.votes -= +vote;
          return newArticle;
        });
        alert("vote not registered, try again");
      });
  };


  return (
 
       < >
       <p>
          <span className="mono">{votes} </span> vote
          {votes > 1 || votes === 0 || votes < -1 ? "s" : ""}
        </p>
        <section className="voting">
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
      </>
  
  );
};
