import React from 'react';

const Comments = (props) => {
    const{name,email}=props.comment;
    return (
        <div style={{border: '1px solid red'}}>
            <p>Name: <strong>{name}</strong></p>
            <p>Email: <strong>{email}</strong></p>
        </div>
    );
};

export default Comments;