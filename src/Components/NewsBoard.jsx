import { useEffect, useState } from "react"
import NewsItoms from "./NewsItoms";

function NewsBoard({category}) {
    const [articals,setarticals] = useState([])
  useEffect(() => {
  let ignore = false;

  async function fetchNews() {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7f4ba66820284375b9b0eca786f6b092`;
      const response = await fetch(url);
      const data = await response.json();
      if (!ignore) {
        setarticals(data.articles || []);
      }
    } catch (err) {
      if (!ignore) setarticals([]);
      console.error("Error fetching news:", err);
    }
  }

  fetchNews();

  return () => {
    ignore = true; // cleanup stops duplicate update
  };
}, [category]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger" >News </span></h2>
      <div className="container">
  <div className="row">
    {articals.map((news, index) => (
      <div className="col-md-3" key={index}>
        <NewsItoms
          titel={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      </div>
    ))}
  </div>
</div>
    </div>
  )
}

export default NewsBoard
