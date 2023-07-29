import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const AddBlog = ({setBlogs}) => {

  const [newBlog, setNewBlog] = useState(
    {
      id: '',
      title: "",
      author: "",
      content: "",
      date: ''
    }
  )

  const navigate = useNavigate();

  function handleTitle(e){

    setNewBlog(previousBlog =>{
      return {...previousBlog, title: e.target.value}
    })
  }

  function handleAuthor(e){
    setNewBlog(previousBlog =>{
      return {...previousBlog, author: e.target.value}
    })
  }

  function handleContent(e){
    setNewBlog(previousBlog =>{
      return {...previousBlog, content: e.target.value}
    })
  }

  function handleID(e){
    setNewBlog(previousBlog =>{
      return {...previousBlog, id: e.target.value}
    })

    setNewBlog(previousBlog =>{
      return {...previousBlog, date: new Date(2023, 6, 27).toISOString()}
    })
  }

  function handleOnSubmit(e){
    e.preventDefault()
    setBlogs(previousBlogs =>{
      return [...previousBlogs, newBlog]
    })

    navigate('/blogs')
    
  }

  return (
    <>
    
    <form onSubmit={handleOnSubmit}>

      <input 
      type="text" 
      onChange={handleTitle}
      placeholder='Please add Title'
      />

    <input 
      type="text" 
      onChange={handleAuthor}
      placeholder='Please add Author'
      />

    <input 
      type="text" 
      onChange={handleContent}
      placeholder='Please add Content'
      />

    <input 
      type="text" 
      onChange={handleID}
      placeholder='Please add ID'
      />

      <button>Add Post</button>

    </form>
    
    </>
  )
}

export default AddBlog