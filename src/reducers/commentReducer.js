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
        comments: [
          comments.map((comment, i) => {
            if (i === action.payload.index) return action.payload.comment;
            return comment;
          }),
        ],
      };
    // case DELETE_COMMENT:
    //   return {
    //     ...state,
    //     comments: comments.filter((i) => i !== action.payload.index),
    //   };
    // default:
    //   return state;
  }
}
