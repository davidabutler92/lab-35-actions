import reducer from './blogReducer';
import { createBlog, deleteBlog } from '../actions/blogActions';

describe('blog reducer', () => {
  it('should create a blog with the CREATE_BLOG action', () => {
    const state = {
      blogs: [],
    };

    const action = createBlog({
      title: 'some blog',
      text: 'some text stuff...',
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      blogs: [{ title: 'some blog', text: 'some text stuff...' }],
    });
  });

  it('should delete a blog using the DELETE_BLOG action', () => {
    const state = {
      blogs: [{ title: 'new blog', text: 'some text' }],
    };

    const action = deleteBlog('new blog');

    expect(reducer(state, action)).toEqual({
      blogs: [],
    });
  });
});
