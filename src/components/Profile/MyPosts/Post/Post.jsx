import React from 'react'
import style from './Post.module.css'

function Post(props) {
    return (
        <div className={style.item}>
            <img src='https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'></img>
            {props.message}
        </div>
    );
}

export default Post;