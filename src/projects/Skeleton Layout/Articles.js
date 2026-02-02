import { useState, useEffect } from "react";
import SkeletonArticle from "./SkeletonArticle";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.log(error.message);
      }
    }, 5000);
  }, []);

  return (
    <div className="articles">
      <h2 className="text-2xl font-bold text-black pb-[10px] border-b border-b-[#eee]">
        Articles
      </h2>

      {articles
        ? articles.slice(0, 5).map((article) => (
            <div key={article.id} className="my-5 mx-auto py-[10px] px-[15px]">
              <h3 className="text-xl font-bold">{article.title}</h3>
              <p className="">{article.body}</p>
            </div>
          ))
        : [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} theme="dark" />)}
    </div>
  );
};

export default Articles;
