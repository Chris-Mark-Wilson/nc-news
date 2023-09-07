import { useContext } from "react";
import { UserContext } from "../contexts/user-context";


export const CommentCard=({comment})=>{

    const user=useContext(UserContext)

    const{comment_id,body,article_id,author,votes,created_at}=comment

    const handleVoteCLick=(e)=>{
        const vote=e.target.value;

    }

    return(
        <div className="comment">
        <p>    {body}</p>
        {user===author&&<button>Remove comment</button>}
        <section className="author-created">
            <p>By: <span className="mono">{author}</span></p>
            <p>On: <span className="mono">{new Date(created_at).toLocaleString()}</span></p>
        <p>Votes:<span  className="mono">{votes}</span></p>
        <button className="vote-button" onClick={handleVoteCLick} value="1">🔼</button>
        <button className="vote-button" onClick={handleVoteCLick} value="-1">🔽</button>
        </section>
            </div>
    )
}