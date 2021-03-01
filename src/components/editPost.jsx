import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./home.css";

const NewPost = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div className="newPost">
      <div className="newPost__posts"></div>
    </div>
  );
};

export default NewPost;
