import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../../actions/blogActions';

const ListItem = ({ title, index }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBlog(title));
  };

  return (
    <>
      <Link to={`/details/${index}`}>
        <h2>{title}</h2>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default ListItem;
