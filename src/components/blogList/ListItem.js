import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../../actions/blogActions';

const ListItem = ({ title, text }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBlog(title));
  };

  return (
    <>
      <h2>{title}</h2>
      <p>{text}</p>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default ListItem;
