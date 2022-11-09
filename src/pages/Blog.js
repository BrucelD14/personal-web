import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function getArticles() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/blogs"
      );
      const response = await request.json();

      setArticles(response);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section>
      <h1>BLOG PAGE</h1>
      <p>Ini beberapa artikel yang dapat anda nikmati:</p>

      {loading ? (<i>Loading blogs..</i>) : (
        <article>
          {articles.map(function (article) {
            return (
              <article key={article.id}>
                <h3><Link to={`/blog/${article.id}`}>{article.title}</Link></h3>
                <time>
                  {new Date(article.publishedAt).toLocaleDateString()}
                </time>
              </article>
            );
          })}
        </article>
      )}
    </section>
  );
}
