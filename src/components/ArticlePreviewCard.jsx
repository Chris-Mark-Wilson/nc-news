import { Link } from "react-router-dom";
import { Article } from "./Article";


export const ArticlePreviewCard = ({ articlePreview,setArticle_id }) => {
  const { title, article_id, topic, article_img_url, comment_count } =
    articlePreview;

  const handleClick = (e) => {

    setArticle_id(e.target.value);
  };

  return (
    <div className="article-preview">
      <section className="preview-title">
        <h3>{topic}</h3>
        <p>{title}</p>
        <img className="preview-image" src={article_img_url} />
        <p>{comment_count} comments</p>
      </section>
      <Link
        to="/Articles/Article"
        element={<Article article_id={article_id} />}
      >
        <button
          className="preview-button"
          onClick={handleClick}
          value={article_id}
        >
          See full article
        </button>
      </Link>
    </div>
  );
};
