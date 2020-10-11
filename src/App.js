/*
 * Import remote dependancies
 */
import React, { useState, useEffect } from "react";
import Axios from "axios";

// CHANGE THIS TO YOUR WORDPRESS SITE URL.
const baseUrl = "https://narod.hr";

export default function App() {
  // Track state for posts, current page and number of pages
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [nrofpages, setNumberofpage] = useState(1);

  // When the page number changes call the api for posts.
  useEffect(() => {
    Axios.get(baseUrl + "/wp-json/wp/v2/posts", {
      params: { page: page }
    }).then((response) => {
      // Store the number of posible pages.
      setNumberofpage(response.headers["x-wp-totalpages"]);
      // Store the posts from the response.
      setPosts(response.data);
    });
  }, [page, setPosts]);

  // Event handler: Decrease page count no lower then 1.
  const handlePrevPage = () => setPage(page - 1 ? page - 1 : 1);
  // Event handler: Increase page count no higher then nrofpages.
  const handleNextPage = () => setPage(page < nrofpages ? page + 1 : nrofpages);

  return (
    <div className="posts-app__wrapper">
      <h1>Navigate Wp Rest Api Posts</h1>

      <div className="posts-app__post-nav">
        <button onClick={handlePrevPage}>Newer posts</button>
        <p>
          Page {page} of {nrofpages}
        </p>
        <button onClick={handleNextPage}>Older posts</button>
      </div>

      <div className="posts-app__post-list">
        {posts &&
          posts.length &&
          posts.map((post, index) => {
            return (
              <div key={post.id} className="posts-app__post">
                <h2>{post.title.rendered}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <a href={post.link} target="_blank">
                  Read post
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}
