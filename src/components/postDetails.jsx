import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./home.css";

const PostDetails = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(async () => {
    let apiEndpoint = "https://jsonplaceholder.typicode.com/posts";
    const result = await axios(`${apiEndpoint}/${id}`);

    setPost([result.data]);
  }, []);

  return (
    <div className="postDetails">
      {post.map((item) => (
        <div className="postDetails__items">
          <h4>User ID</h4>
          <p>{item.userId}</p>
          <h4>Id</h4>
          <p>{item.id}</p>
          <h4>Title</h4>
          <p>{item.title}</p>
          <h4>Body</h4>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostDetails;
