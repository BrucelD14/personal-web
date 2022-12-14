import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    document.title = "BLOG";
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
    <section className="section">
      <h1 className="section-title">BLOG</h1>
      <p className="section-description">
        Here are some readings that can make you more brilliant:
      </p>

      {loading ? (
        <i>Loading blogs..</i>
      ) : (
        <article className="articles">
          {articles.map(function (article) {
            return (
              <article key={article.id} className="article">
                <h3 className="article-title">
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                </h3>
                <time className="article-time">
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
