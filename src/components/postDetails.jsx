import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./postDetails.css";

const PostDetails = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

      const result = await axios(`${apiEndpoint}/${id}`);

      setPost([result.data]);

      return result;
    };

    fetchData();
  }, [id]);

  return (
    <div className="postDetails">
      {post.map((item) => (
        <div>
          <h4 className="postDetails__items">User ID</h4>
          <p className="postDetails__items">{item.userId}</p>
          <h4 className="postDetails__items">Id</h4>
          <p className="postDetails__items">{item.id}</p>
          <h4 className="postDetails__items">Title</h4>
          <p className="postDetails__items">{item.title}</p>
          <h4 className="postDetails__items">Body</h4>
          <p className="postDetails__items">{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostDetails;
