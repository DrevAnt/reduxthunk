import React from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../actions";
import { useForm } from "react-hook-form";

const AddPost = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(addPost(data));
    document.querySelector("#postTitle").value = "";
    document.querySelector("#postBody").value = "";
  };

  return (
    <div>
      <div className="m-lg-2 col-md-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="postTitle" className="form-control-lg">
            New Post title
          </label>
          <br />
          <input
            {...register("title")}
            id="postTitle"
            className="form-control-lg m-lg-2"
            placeholder="Title"
            type="text"
          />

          <br />

          <label htmlFor="postBody" className="form-control-lg">
            New Post content
          </label>
          <br />
          <textarea
            {...register("body")}
            id="postBody"
            className="form-control-lg m-lg-2"
            type="text"
            placeholder="Post"
          />

          <br />

          <input
            className="btn btn-primary btn m-lg-2"
            type="submit"
            value="Create Post"
            style={{ marginBottom: "10px" }}
          />
        </form>
        <p>
          This app is using a fake API that simulate, for example the post
          request, and when you using a post request the API not save your
          request on their server and you can open Chrome DevTools for checking
          updated state after adding new post
        </p>
      </div>
    </div>
  );
};

export default AddPost;
