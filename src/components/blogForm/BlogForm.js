import React, { useState } from 'react';
import { useDispatch } from '../../state/BlogProvider';
import { createBlog } from '../../actions/blogActions';

const BlogForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createBlog({ title, text }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      ></input>
      <textarea
        type="text"
        placeholder="Text"
        value={text}
        onChange={({ target }) => setText(target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;
