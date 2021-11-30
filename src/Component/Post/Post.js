import React from 'react';
import { useNavigate } from "react-router";

const Post = (props) => {
    console.log()
    const{id,title,body} = props.post;

    const postStyle = {
        border: '1px solid red',
        borderRadius:'20px ',
        backgroundColor:'black',
        color: 'white',
        padding: '30px',
        margin: '30px'
    }
    let navigate  = useNavigate();
    
    function showComment() {
        const url = `post/${id}`;
        navigate(url);
      }
    return (
        <div style={postStyle}>
            <h3>Hi i am Post!!!</h3>
            <h2><strong>post Id :{id}</strong> {title}</h2>
            <h4>{body}</h4>
            <button onClick={() =>showComment(id)}>Show comment</button>
        </div>
    );
};

export default Post;