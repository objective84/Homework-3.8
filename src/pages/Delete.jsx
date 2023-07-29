import React from 'react'
import { useParams } from 'react-router-dom'
import AllBlogs from './AllBlogs'

const Delete = ({blogs, setBlogs}) => {
  
const {id} = useParams()

let filteredArray = blogs.filter(blog =>{
  return blog.id == id

})

  return (
    <>
   
   <AllBlogs blogs={filteredArray}/>

   <button>Delete Post</button>

   {/* {filteredArray.map(blog =>{

    return (
        <>
        <h2>Title: {blog.title}</h2>
        <h3>Author: {blog.author}</h3>
        <p>Contents: {blog.content}</p>
        <p>Date: {blog.date}</p>
        <p>Id: {blog.id}</p>
        <hr />
        </>
    )
   })} */}
      
    
    </>
  )
}

export default Delete