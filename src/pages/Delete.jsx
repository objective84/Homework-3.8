import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import AllBlogs from "./AllBlogs";

/* 
  ######################################################################
  ######################################################################
  ######################################## HOMEWORK #####################
  #######################################################################
  ########################################################################
  
  
  TODO: Implement the Delete Post button functionality

  1) First task: When a user clicks the 'Delete Post' button, your task is to ensure that the blog post with the specified id is removed from the blogs array in the App.js.

  2) Second task: Once the blog post is deleted, you need to redirect the application to the 'AllBlogs' page, with a route of '/blogs'.


  Optional TODO: As an additional exercise, you can hide the 'Delete Post' button if the specified id is invalid (i.e., if no blog post has that id). T
  */

const Delete = ({ blogs, setBlogs }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  let filteredArray = blogs.filter((blog) => {
    return blog.id == id;
  });

  const deletePost = () => {
    const newList = blogs.filter((blog) => {
      return blog.id != id;
    });
    debugger;
    setBlogs(newList);
    navigate("/blogs");
  };

  return (
    <>
      <AllBlogs blogs={filteredArray} />

      {filteredArray && <button onClick={deletePost}>Delete Post</button>}
    </>
  );
};

export default Delete;
