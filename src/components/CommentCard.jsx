import { useContext, useState } from "react";
import { UserContext } from "../contexts/user-context";
import { deleteComment } from "../utils/api";
import { Success } from "./Success";

export const CommentCard = ({ comment, setCommentsList }) => {
 const[deleting,setDeleting]=useState(false)
 const[deleted,setDeleted]=useState(false)
  const { user } = useContext(UserContext);

  const { comment_id, body, article_id, author, votes, created_at } = comment;

  const handleVoteCLick = (e) => {
    const vote = e.target.value;
  };

  const handleRemoveComment = (e) => {
 setDeleting(true)

    deleteComment(comment_id)
      .then(() => {
        setDeleting(false)
     setDeleted(true)
      })
      .catch((err) => {
     
        alert(err)
      });
  };
if(deleted)return(
    <div className="comment">
        <h4>Comment deleted by {user}</h4>
        </div>
)
if(deleting)return(
    <div className="comment">
    <h4>Deleting comment</h4>
    </div>
)

  return (


      <div className="comment">
        <p> {body}</p>
        {user === author && (
          <button onClick={handleRemoveComment}>Remove comment</button>
        )}
        <section className="author-created">
          <p>
            By: <span className="mono">{author}</span>
          </p>
          <p>
            On:{" "}
            <span className="mono">
              {new Date(created_at).toLocaleString()}
            </span>
          </p>
          <p>
            Votes:<span className="mono">{votes}</span>
          </p>
          <button className="vote-button" onClick={handleVoteCLick} value="1">
            🔼
          </button>
          <button className="vote-button" onClick={handleVoteCLick} value="-1">
            🔽
          </button>
        </section>
      </div>

  );
};
