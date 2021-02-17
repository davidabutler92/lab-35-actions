import reducer from './blogReducer';
import { createBlog } from '../actions/blogActions';

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
});
