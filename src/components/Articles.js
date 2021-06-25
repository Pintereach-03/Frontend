import React from 'react';

const Articles = (props) => {
    const { articles, deleteArticle } = props;
    


    return(
        <div className="article-cards">
          <div className="card">
            {articles.map(article => 
                <div className="article" key={article.title}>
                    <button onClick={()=>deleteArticle(article.id)}>Delete Article</button>
                    <h2>{article.title}</h2>
                    <h3>{article.description}</h3>
                    <h4>{article.link}</h4>
                </div>
            )}
          </div>
        </div>
    );
}

export default Articles;