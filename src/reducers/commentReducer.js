import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

export default function reducer(state = {}, action) {
  const { comments } = state;
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
        [action.payload.index]: [
          ...state[action.payload.index].slice(0, action.payload.commentIndex),
          ...state[action.payload.index].slice(action.payload.commentIndex + 1),
        ],
      };
    default:
      return state;
  }
}
