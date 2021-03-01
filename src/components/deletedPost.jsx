import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./deletedPost.css";

const DeletedPost = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

      await axios(`${apiEndpoint}/${id}`);
    };

    fetchData();
  }, [id]);

  return (
    <div className="deletedPost">
      <h4>Post with ID {id} was deleted successfully</h4>
    </div>
  );
};

export default DeletedPost;
