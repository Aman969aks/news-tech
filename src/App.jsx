import React, { useState } from "react";
import Navbar from "./Navbar";
import NewsCard from "./NewsCard";
import Footer from "./Footer";
import newsData from "./data";
import "./App.css";

function App() {
  const [showAll, setShowAll] = useState(false);

  const visibleNews = showAll
    ? newsData
    : newsData.slice(0, 6);

  return (
    <>
      <Navbar />

      <main id="home">

        {/* Hero Section */}

        <section className="hero-section">
          <div className="hero-content">
            <span className="hero-tag">
              NEWS TECH
            </span>

            <h1>
              Technology, Business
              <br />
              & The Future
            </h1>

            <p>
              Stay informed with the latest stories,
              technology trends and important updates
              from around the digital world.
            </p>

            <button
              className="hero-button"
              onClick={() =>
                document
                  .getElementById("latest-news")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Latest News
            </button>
          </div>

          <div className="hero-side">
            <div className="hero-number">01</div>

            <p>
              Latest stories curated by
              the News Tech team.
            </p>
          </div>
        </section>

        {/* Latest News */}

        <section
          className="news-section"
          id="latest-news"
        >
          <div className="section-heading">
            <div>
              <span className="section-label">
                TODAY'S STORIES
              </span>

              <h2>Latest News</h2>
            </div>

            <p>
              Discover what's happening
              across technology and business.
            </p>
          </div>

          {/* Featured News */}

          <div className="featured-news">
            {newsData.slice(0, 1).map((news) => (
              <NewsCard
                key={news.id}
                news={news}
                featured={true}
              />
            ))}
          </div>

          {/* News Grid */}

          <div className="news-container">
            {visibleNews.slice(1).map((news, index) => (
              <NewsCard
                key={news.id}
                news={news}
                compact={index % 3 === 2}
              />
            ))}
          </div>

          {/* See More */}

          {newsData.length > 6 && (
            <div className="see-more-container">
              <button
                className="see-more-button"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll
                  ? "Show Less ↑"
                  : "See More News →"}
              </button>
            </div>
          )}
        </section>

        {/* Newsletter */}

        <section className="newsletter">
          <div>
            <span>STAY UPDATED</span>

            <h2>
              Get the latest news in your inbox.
            </h2>

            <p>
              Follow the latest technology and
              business stories with News Tech.
            </p>
          </div>

          <div className="newsletter-box">
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default App;