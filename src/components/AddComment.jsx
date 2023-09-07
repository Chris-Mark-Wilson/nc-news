import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/user-context";
import { postComment } from "../utils/api";
import { Success } from "./Success";
import { createPortal } from "react-dom";

export const AddComment = ({ article_id, setCommentsList,setShowComments }) => {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  //get list of all users
  // check loggged in would be better
  //then display add comment if logged in
  //else display "log in to comment"

  const handleSubmit = (e) => {
    const comment = e.target.value;
    if (comment === "") {
      alert("Please enter a comment before submitting");
      return;
    }
    setSubmitted(true);

    setCommentsList((list) => {
      const newComment={}
      newComment.body=comment;
      newComment.comment_id=list.length+1;
      newComment.created_at= new Date().toString()
      newComment.author=user
      newComment.votes=0;
      return [newComment, ...list];
    });
    setShowComments(true)
    postComment(article_id, user, comment)
      .then((result) => {
        setSuccess(true);
        setComment("");
        closeModal();
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
        setSubmitted(false)
      })
      .catch(msg=> {
        setCommentsList((list) => {
          return [...list].shift();
        });
       console.log(msg,"msg")
        alert(msg);
        closeModal();
        setSubmitted(false)
      });
  };

  return (
    <>
      {success && createPortal(<Success />, document.body)}
      <button className="add-comment-button" onClick={openModal}>
        Add comment
      </button>

      {showModal && article_id && (
        <div className="mod">
          <p>commenting as {user}</p>
          <textarea
            placeholder="enter comment"
            className="text-area"
            value={comment}
            onChange={handleChange}
          />
          <section>
            {!submitted ? (
              <button
                onClick={handleSubmit}
                className="submit-cancel"
                value={comment}
              >
                Submit
              </button>
            ) : (
              <button className="submit-cancel">Submitting</button>
            )}
            <button onClick={closeModal} className="submit-cancel">
              Cancel
            </button>
          </section>
        </div>
      )}
    </>
  );
};
