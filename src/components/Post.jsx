import moment from 'moment-with-locales-es6';
import React from 'react'

function Post({ item }) {
    moment.locale('ru')
    return (
        <div className='post__container'>
            <div>content: {item.content}</div>
            <div>Created: {moment(item.created).fromNow()}</div>
        </div>
    );
}

export default Post;