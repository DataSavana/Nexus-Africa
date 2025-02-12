import React from "react";

const Blog = () => {
  return (
    <div id="blog" className="blog">
      <h2>Latest Updates</h2>
      <div className="blog-post">
        <h3>Why AI Needs More African Data</h3>
        <p>
          Many AI models fail to understand African dialects, languages, and
          cultures...
        </p>
        <a href="#">Read More</a>
      </div>
      <div className="blog-post">
        <h3>Challenges in Collecting AI Data from Underrepresented Regions</h3>
        <p>Data scarcity remains a significant challenge in AI training...</p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

export default Blog;
