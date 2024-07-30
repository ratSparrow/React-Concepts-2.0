import  { useEffect, useState } from 'react';

import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(data => {
        console.log(data.data)
        setPosts(data.data)
    })
  },[])
  
  return (
    <div>
      <h2>Posts:{ posts.length}</h2>
    </div>
  );
};

export default Posts;