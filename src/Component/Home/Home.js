import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [post,setPost] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div>
            <p>Home {post.length}</p>
            {
                post.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;