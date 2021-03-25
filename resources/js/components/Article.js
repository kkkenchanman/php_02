import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";



const Article = () => {

  const [articles, setArticle] = useState([]);

  useEffect(() => {
      getArticle()
  })

  const getArticle = async () => {
      const response = await axios.get('/api/getArticle');
      setArticle(response.data.articles)
  }

  return (
    <React.Fragment>
      {articles.map((article) => 
        <div class='contentContainer'>
          <h2 key={article.id}>{article.title}</h2>
          <p key={article.id}>{article.category}</p>
          <p key={article.id}>{article.content}</p>
        </div>

      )}
    </React.Fragment>

    
  );
}

export default Article;