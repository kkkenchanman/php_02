import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";



const Article = () => {

  const [articles, setArticle] = useState([]);

  useEffect(() => {
      getArticle()
  },[])

  const getArticle = async () => {
      const response = await axios.get('/api/getArticle');
      setArticle(response.data.articles)
  }

  return (
    <ul>
      {articles.map((article) => <li key={article.id}>{article.title}</li>)}
    </ul>
  );
}

export default Article;