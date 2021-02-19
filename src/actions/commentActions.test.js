import { CREATE_COMMENT, createComment } from './commentActions';

describe('comment actions', () => {
  it('creates a comment using CREATE_COMMENT action', () => {
    const action = createComment({
      title: 'some title',
      text: 'this is comment text',
    });
    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: { title: 'some title', text: 'this is comment text' },
    });
  });
});
