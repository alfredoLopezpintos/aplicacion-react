import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import PostITsCSS from './PostITs.module.css';
import HomeCSS from '../Home/Home.module.css';
import { deletePostIT } from '../../Redux/postITsSlice';
import AddPost from '../AddPostIT';
import EditPostIt from '../PostITsEdit/index';

export const PostITs = () => {
  const { posts } = useSelector((state) => state.postITs);

  const result = posts.map((post) => !post.deleted && (
    <>
      <List post={post} />
    </>
  ));

  return (
    <div className={HomeCSS.list}>
      {result}
      <AddPost />
    </div>
  );
};

const List = (...value) => {
  const postIt = value[0].post;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  return isEditing
    ? <EditPostIt post={postIt} setIsEditing={setIsEditing} />
    : (
      <div className={PostITsCSS.note} key={postIt.id}>
        <span>{ postIt.textContent }</span>
        <div className={HomeCSS.footer}>
          <small>{ postIt.date }</small>
          <div>
            <MdModeEdit onClick={() => setIsEditing(!isEditing)} className={HomeCSS.icon} />
            <div className={HomeCSS.divider} />
            <MdDelete onClick={() => dispatch(deletePostIT(postIt))} className={HomeCSS.icon} />
          </div>
        </div>
      </div>
    );
};

export default PostITs;
