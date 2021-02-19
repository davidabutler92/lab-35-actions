import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCommentsByIndex } from '../../selectors/commentSelectors';
import CommentsListItem from './CommentsListItem';

export default function CommentsList() {
  const postIndex = Number(useParams().id);
  const commentsArray = useSelector(getCommentsByIndex(postIndex));

  const commentsList = commentsArray?.map((comment, index) => (
    <li key={index}>
      <CommentsListItem
        blogIndex={postIndex}
        commentIndex={index}
        text={comment}
      />
    </li>
  ));

  return <ul>{commentsList}</ul>;
}
