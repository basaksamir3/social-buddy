import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const { id } = useParams()
    const[post,setPost] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
        console.log(setPost)
    },[])
    const[comments,setComments] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
            <h2><Link to="/">Home</Link></h2>
            <div>
                <h2>Post Details {id}</h2>
                <p> Post id: {post.id}</p>
                <p> Title: {post.title}</p>
                <p>Details: {post.body}</p>
                {
                    comments.map(comment =><Comments comment={comment}></Comments>)
                }
            </div>
        </div>
    );
};

export default PostDetails;