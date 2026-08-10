import React from "react";

function NewsCard({ news, featured = false, compact = false }) {
  return (
    <article
      className={`news-card ${featured ? "featured-card" : ""} ${
        compact ? "compact-card" : ""
      }`}
    >
      <div className="card-image-wrapper">
        <img src={news.image} alt={news.title} />

        <span className="category">
          {news.category}
        </span>
      </div>

      <div className="card-content">
        <div className="news-meta">
          <span>{news.date}</span>
          <span>•</span>
          <span>{news.author}</span>
        </div>

        <h2>{news.title}</h2>

        <p>{news.description}</p>

        <button className="read-more">
          Read More →
        </button>
      </div>
    </article>
  );
}

export default NewsCard;