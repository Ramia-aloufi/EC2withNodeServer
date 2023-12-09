import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { Link } from 'react-router-dom'
type Post = {
  id:number
  title: string
  content: string
  author:string
  date: string
}

function App() {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchData = ()=>{
    axios.get('http://localhost:3000/posts')
    .then(response => {
      const posts = response.data.posts
      setPosts(posts)
      console.log(posts);
    })
    .catch(error => {
      // Handle errors here
      console.error('Error fetching data:', error);
    });
  }


  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
    <h2>Posts</h2>
    {posts ? posts.map((post:Post)=>{
     return( 
     <li key={post.id}>
     <Link to={`/${post.id}`}>{post.title}</Link>
   </li>)
    })
  :
  <h1 >empty</h1>}

    </>
  )
}

export default App
