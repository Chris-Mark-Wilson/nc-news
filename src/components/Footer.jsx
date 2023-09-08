import { useSearchParams } from "react-router-dom";

import { Link } from "react-router-dom";
export const Footer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  return (
    <section className="footer">
      {topic && (
        <Link to="../">
          <button className="back-button">BACK</button>
        </Link>
      )}
    </section>
  );
};
