import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/posts");

      setPosts(result.data);

      return result;
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="home__posts">
        <div className="home__postsLeft">
          <h3>All Posts</h3>
          {posts.map((item) => (
            <div className="home__postsLeft">
              <h4>Title: </h4>
              <div key={item.id}>{item.title}</div>
              <div className="home__postsRight">
                <Link to={`/postDetails/${item.id}`}>
                  <button className="home__button">See more details</button>
                </Link>
                <Link to={`/editPost/${item.id}`}>
                  <button className="home__button">Edit post</button>
                </Link>
                <Link to={`/deletedPost/${item.id}`}>
                  <button className="home__button">Delete post</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
