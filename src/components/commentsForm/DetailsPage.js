import React from 'react';
import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';

export default function DetailsPage() {
  return (
    <>
      <CommentsForm />
      <CommentsList />
    </>
  );
}
