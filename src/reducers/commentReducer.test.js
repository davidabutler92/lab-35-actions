import reducer from './commentReducer';
import { createComment, deleteComment } from '../actions/commentActions';

describe('comments reducer', () => {
  it('creates a comment with the CREATE_COMMENT reducer', () => {
    const state = {
      comments: [],
    };

    const action = createComment({
      title: 'some title',
      text: 'some text',
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      comments: [{ title: 'some title', text: 'some text' }],
    });
  });

  it('deletes a comment with the DELETE_COMMENT action', () => {
    const state = {
      comments: [{ title: 'some comment', text: 'some text' }],
    };

    const action = deleteComment('some comment');

    expect(reducer(state, action)).toEqual({
      comments: [],
    });
  });
});
