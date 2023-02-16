import React from 'react'
import { Link } from 'react-router-dom';
import useJsonFetch from './hooks/useJsonFetch'
import Post from './Post';
import MyButton from './UI/button/MyButton';

function Posts() {
    const [{ data, loading, error }] = useJsonFetch("http://localhost:7777/posts");

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (loading) {
        return <div>Загрузка...</div>;
    } else if (data !== undefined) {
        return (
            <div style={{ width: "100%" }}>
                <div className="post__create">
                    <Link to="/posts/new"><MyButton>Создать пост</MyButton></Link>
                </div>
                {data.map(item => {
                    return (
                        <Link
                            to={`/posts/${item.id}`}
                            state={{ item }}
                            key={item.id}
                        >
                            <Post item={item} />
                        </Link>
                    );
                })
                }
            </div >
        );
    }
}

export default Posts;