import { createComment, CREATE_COMMENT } from './commentActions';

describe('comment actions', () => {
  it('handles the CREATE_COMMENT action', () => {
    const action = createComment(0, 'some text');

    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: {
        index: 0,
        comment: 'some text',
      },
    });
  });
});
