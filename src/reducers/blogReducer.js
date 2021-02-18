import { CREATE_BLOG, DELETE_BLOG } from '../actions/blogActions';

export const initialState = {
  blogs: [],
};

export default function reducer(state = initialState, action) {
  const { blogs } = state;
  switch (action.type) {
    case CREATE_BLOG:
      return {
        ...state,
        blogs: [...blogs, action.payload],
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: blogs.filter((blog) => blog.title !== action.payload),
      };
    default:
      return state;
  }
}
