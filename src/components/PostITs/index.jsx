import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PostITs.css';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { deletePostIT } from '../../Redux/postITsSlice';
import AddPost from '../AddPostIT';
import EditPostIt from '../PostITsEdit/index';

export const PostITs = () => {
  let { posts } = useSelector((state) => state.postITs);
  if (posts.length >= 2) {
    posts = posts.slice().sort((a, b) => b.system_date - a.system_date);
    posts.forEach((x) => {
      console.log(x.system_date);
    });
  }
  const result = posts.map((post) => !post.deleted && (
    <>
      <List post={post} key={post.id} />
    </>
  ));

  return (
    <div className="notes-list">
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
      <div className="note">
        <span>{ postIt.textContent }</span>
        <div className="note-footer">
          <small>{ postIt.date }</small>
          <div>
            <MdModeEdit onClick={() => setIsEditing(!isEditing)} className="icon" />
            <div className="divider" />
            <MdDelete onClick={() => dispatch(deletePostIT(postIt))} className="icon" />
          </div>
        </div>
      </div>
    );
};

export default PostITs;
