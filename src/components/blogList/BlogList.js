import React from 'react';
import { useSelector } from 'react-redux';
import { getBlogs } from '../../selectors/blogSelectors';

import ListItem from './ListItem';

const BlogList = () => {
  const blogs = useSelector(getBlogs);

  const blogsList = blogs.map((blog, index) => (
    <li key={blog.title}>
      <ListItem index={index} {...blog} />
    </li>
  ));

  return <ul>{blogsList}</ul>;
};

export default BlogList;
