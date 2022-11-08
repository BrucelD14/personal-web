import { useEffect, useState } from "react";

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
      setLoading(false)
    }
    getArticles();
  }, []);

  return (
    <section>
      <h1>BLOG PAGE</h1>
      <p>Ini beberapa artikel yang dapat anda nikmati:</p>

      {loading && <i>Loading articles..</i>}
      {!loading && (
        <div>
        {articles.map(function(article) {
            return(
                <article key={article.id}>
                    {article.title}
                </article>
            )
        })}
        </div>
      )}
    </section>
  );
}
