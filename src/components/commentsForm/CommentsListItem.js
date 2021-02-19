import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

export default function CommentsListItem({ blogIndex, commentIndex, text }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteComment(blogIndex, commentIndex));
  };

  return (
    <>
      <p>{text}</p>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
