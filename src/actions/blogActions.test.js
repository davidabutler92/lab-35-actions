import { createBlog, CREATE_BLOG } from './blogActions';

describe('blog actions', () => {
  it('creates a blog with CREATE_BLOG action', () => {
    const action = createBlog({
      title: 'some title',
      text: 'some text',
    });

    expect(action).toEqual({
      type: CREATE_BLOG,
      payload: { title: 'some title', text: 'some text' },
    });
  });
});
