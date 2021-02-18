import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

export const initialState = {
  comments: [],
};

export default function reducer(state = initialState, action) {
  const { comments } = state;
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...comments, action.payload],
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: comments.filter(
          (comment) => comment.title !== action.payload
        ),
      };
    default:
      return state;
  }
}
