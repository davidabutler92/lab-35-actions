import { getCommentsByIndex } from './commentSelectors';

describe('comments selector', () => {
  it('should get a comment by index', () => {
    const state = {
      comments: {
        0: ['some comment'],
      },
    };

    const comment = getCommentsByIndex(0)(state);
    console.log(comment);

    expect(comment).toEqual(['some comment']);
  });
});
