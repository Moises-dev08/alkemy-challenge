import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import "./newPost.css";
import axios from "axios";

const NewPost = () => {
  const [post, setPost] = useState([]);

  let history = useHistory();

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
      concept: formik.values.concept,
    };

    const createNewPost = async (data) => {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPost(response.data);

      return response;
    };

    if (Object.entries(formik.errors).length === 0) {
      history.push("/");
    } else {
      alert("Please complete required fields.");
    }
  };
  return (
    <div className="postForm">
      <form className="postForm__form" onSubmit={formik.handleSubmit}>
        <label htmlFor="title">
          <h3 className="postForm__title">Title</h3>
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
          <h3 className="postForm__title">Content</h3>
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
          className="postForm__button"
          onClick={handleSubmitButton}>
          Create new post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
