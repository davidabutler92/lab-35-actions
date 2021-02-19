import { getBlogs } from './blogSelectors';

describe('blog selectors', () => {
  it('select the list of blogs from state', () => {
    const state = {
      blogs: {
        blogs: [{ title: 'some title', text: 'some text' }],
      },
    };

    const blogs = getBlogs(state);

    expect(blogs).toEqual([{ title: 'some title', text: 'some text' }]);
  });
});
