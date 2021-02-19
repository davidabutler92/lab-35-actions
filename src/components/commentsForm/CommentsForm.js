import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createComment } from '../../actions/commentActions';

export default function CommentsForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const index = Number(useParams().id);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createComment(index, text));
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        placeholder="Comment..."
        onChange={({ target }) => setText(target.value)}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
}
