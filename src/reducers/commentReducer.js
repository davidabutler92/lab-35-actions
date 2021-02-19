import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        [action.payload.index]: [
          ...(state[action.payload.index] || []),
          action.payload.comment,
        ],
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [action.payload.blogIndex]: [
          ...state[action.payload.blogIndex].slice(
            0,
            action.payload.commentIndex
          ),
          ...state[action.payload.blogIndex].slice(
            action.payload.commentIndex + 1
          ),
        ],
      };
    default:
      return state;
  }
}
