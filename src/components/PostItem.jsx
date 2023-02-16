import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Post from './Post';
import MyButton from './UI/button/MyButton';

function PostItem() {
    const { id } = useParams()
    const { state } = useLocation();
    const navigate = useNavigate();
    const [change, setChange] = useState(false);
    const [data, setData] = useState({ ...state.item, content: state.item.content });

    async function deleteHandler(e) {
        e.preventDefault();
        fetch("http://localhost:7777/posts/" + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(() => { return (navigate("/")) });
    }

    async function updateHandler(e) {
        e.preventDefault();
        fetch("http://localhost:7777/posts/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: Number(id), content: data.content })
        }).then(() => setChange(false));
    }

    if (!change) {
        return (
            <div className="post__create-container">
                <MyButton
                    onClick={(e) => { e.preventDefault(); return (navigate("/")) }}
                    style={{ marginBottom: "5px", backgroundColor: "transparent" }}>
                    X
                </MyButton>
                <Post item={data} />
                <div style={{ display: "flex", marginTop: "10px" }}>
                    <MyButton onClick={() => setChange(true)}>Изменить</MyButton>
                    <MyButton onClick={deleteHandler} style={{ marginLeft: "10px", backgroundColor: "red" }}>Удалить</MyButton>
                </div>
            </div>
        );
    } else {
        return (<div className="post__create-container">
            <MyButton
                onClick={(e) => { e.preventDefault(); return (navigate("/")) }}
                style={{ marginBottom: "5px", backgroundColor: "transparent" }}>
                X
            </MyButton>
            <textarea
                style={{ resize: "none", padding: "10px", marginBottom: "5px", alignSelf: "stretch" }}
                name="create" cols="30" rows="10"
                value={data.content} onChange={(e) => setData({ ...data, content: e.target.value })}>
            </textarea>
            <MyButton onClick={updateHandler}>Сохранить</MyButton>
        </div>
        )
    }

}

export default PostItem;