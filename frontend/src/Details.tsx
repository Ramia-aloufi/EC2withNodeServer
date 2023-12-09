import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { Link, useParams } from 'react-router-dom'
type Post = {
  id:number
  title: string
  content: string
  author:string
  date: string
}

const initialPost = {
  id:0,
  title: '',
  content: '',
  author:'',
  date: ''
}

function Details() {
  const [posts, setPosts] = useState<Post>(initialPost)



  const { id } = useParams();


  useEffect(()=>{
    
    const fetchData = ()=>{
      axios.get(`http://localhost:3000/posts/${id}`)
      .then(response => {
        const posts = response.data.posts
        setPosts(posts)
        console.log(typeof(posts));
      })
      .catch(error => {
        // Handle errors here
        console.error('Error fetching data:', error);
      });
    }
    fetchData()
  },[id])
  return (
    <>



    {posts ? (
  <div>
    <h1>{posts.title}</h1>
    <h3>{posts.content}</h3>
    <h6>{posts.author}</h6>
    <h6>{posts.date}</h6>
  </div>
) : (
  <h1>empty</h1>
)}

     <Link to={`/`}>AllPosts</Link>

    </>
  )
}

export default Details
