import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const DeleteBlog = () => {

  const [id, setID] = useState(0)
  const navigate = useNavigate()

  function handleID(e){
    setID(e.target.value)
  }

  function handleOnSubmit(e){
    e.preventDefault()
    navigate(`/blogs/delete/${id}`)
    
  }
  return (
    <>
    
<form onSubmit={handleOnSubmit}>


<input 
type="text" 
onChange={handleID}
placeholder='Please add ID'
/>

<button>Delete Post</button>

</form>
    
    </>
  )
}

export default DeleteBlog