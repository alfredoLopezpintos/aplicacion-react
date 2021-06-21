import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PostITs.css';
import { MdDelete, MdModeEdit } from 'react-icons/md';
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
      <div className="note" key={postIt.id}>
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
