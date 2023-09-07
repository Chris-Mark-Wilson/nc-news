import { Link } from "react-router-dom";
import { Article } from "./Article";


export const ArticlePreviewCard = ({ articlePreview}) => {
  const { title, article_id, topic, article_img_url, comment_count } =
    articlePreview;



  return (
    <div className="article-preview">
      <section className="preview-title">
        <h3>{topic}</h3>
        <p>{title}</p>
        <img className="preview-image" src={article_img_url} />
        <p>{comment_count} comments</p>
      </section>
      <Link
        to={`/Articles/${article_id}`}
        element={<Article  />}
      >
        <button
          className="preview-button"
             >
          See full article
        </button>
      </Link>
      <hr/>
    </div>
  );
};
