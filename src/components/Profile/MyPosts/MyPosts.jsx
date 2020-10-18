import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post'

function MyPosts() {

  let postsData = [
    { id: 1, message: 'Hey!' },
    { id: 2, message: 'Yep' },
    { id: 3, message: 'Sunny' },
    { id: 4, message: 'Swimming' }
  ];

  let postsElements = postsData.map( post => <Post message={post.message} />);

  return (
    <div className={style.postsArea}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      {postsElements}
    </div>
  );
}

export default MyPosts;