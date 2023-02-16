import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

function CreatePost() {
    const [data, setData] = useState('');
    const navigate = useNavigate();

    async function createHandler(e) {
        e.preventDefault();
        fetch("http://localhost:7777/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: 0, content: data })
        }).then(() => { return (navigate("/")) });
    }

    return (
        <div className="post__create-container">
            <MyButton
                onClick={(e) => { e.preventDefault(); return (navigate("/")) }}
                style={{ marginBottom: "5px", backgroundColor: "transparent" }}
            >
                X
            </MyButton >
            <textarea
                style={{ resize: "none", padding: "10px", marginBottom: "5px", alignSelf: "stretch" }}
                name="create" cols="30" rows="10"
                value={data}
                onChange={(e) => setData(e.target.value)}>
            </textarea>
            <MyButton onClick={createHandler}>Опубликовать</MyButton>
        </div >
    );
}

export default CreatePost;