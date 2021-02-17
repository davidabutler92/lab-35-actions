import React from 'react';
import { useDispatch } from '../../state/BlogProvider';
import { deleteBlog } from '../../actions/blogActions';

const ListItem = ({ title, text }) => {
  const dispatch = useDispatch();
};
