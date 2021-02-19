import React from 'react';
import { useSelector } from 'react-redux';
import { getBlogs } from '../../selectors/blogSelectors';

import ListItem from './ListItem';

const BlogList = () => {
  const blogs = useSelector(getBlogs);

  const blogsList = blogs.map((blog) => (
    <li key={blog.title}>
      <ListItem {...blog} />
    </li>
  ));

  return <ul>{blogsList}</ul>;
};

export default BlogList;
