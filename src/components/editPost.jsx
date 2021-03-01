import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import "./editPost.css";

const EditPost = () => {
  const [post, setPost] = useState([]);
  const [postEdited, setPostEdited] = useState([]);

  const { id } = useParams();

  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      let apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

      const result = await axios(`${apiEndpoint}/${id}`);

      setPost([result.data]);

      return result;
    };

    fetchData();
  }, [id]);

  const initialValues = {
    title: "",
    content: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required field"),
    content: Yup.string().required("Required field"),
  });

  const onSubmit = (values) => {
    console.log("values>>", values, "errors>> ", formik.errors);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleSubmitButton = (event) => {
    event.preventDefault();

    let data = {
      title: formik.values.title,
      content: formik.values.content,
    };

    const editPost = async (data) => {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPostEdited(response.data);

      return response;
    };

    if (Object.entries(formik.errors).length === 0) {
      history.push("/");
    } else {
      alert("Please complete required fields.");
    }
  };

  return (
    <div className="editPost">
      <div className="editPost__posts">
        <div className="editForm">
          <form className="editForm__form" onSubmit={formik.handleSubmit}>
            <label htmlFor="title">
              <h3 className="editForm__title">Title</h3>
            </label>
            <input
              id="title"
              type="text"
              name="title"
              {...formik.getFieldProps("title")}
              placeholder="Title"
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="errors"> {formik.errors.title}</div>
            ) : null}
            <label htmlFor="content">
              <h3 className="editForm__title">Content</h3>
            </label>
            <input
              id="content"
              type="text"
              name="content"
              {...formik.getFieldProps("content")}
              placeholder="Content"
            />
            {formik.touched.content && formik.errors.content ? (
              <div className="errors"> {formik.errors.content}</div>
            ) : null}

            <button
              type="submit"
              className="editForm__button"
              onClick={handleSubmitButton}>
              Edit post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
