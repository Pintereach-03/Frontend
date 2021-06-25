import React from 'react';

const Articles = (props) => {
    const { articles, deleteArticle } = props;

    return(
      <div className="articles-card">
        <div className="card">
          {articles.map(article =>
              <div className="articles-section" key={article.id}>
                  <h2>{article.title}</h2>
                  <h3>{article.description}</h3>
                  <h4>{article.link}</h4>
                  <button onClick={()=>deleteArticle(article.id)}>Delete Article</button>
              </div>
          )}
        </div>
      </div>
    );
}

export default Articles;
