import reducer from './commentReducer';
import { createComment, deleteComment } from '../actions/commentActions';

describe('comments reducer', () => {
  it('creates a comment with the CREATE_COMMENT reducer', () => {
    const state = {};

    const action = createComment(0, 'some comment');

    const newState = reducer(state, action);

    expect(newState).toEqual({ 0: ['some comment'] });
  });

  it('deletes a comment with the DELETE_COMMENT action', () => {
    const state = {
      0: ['hello', 'goodbye'],
    };
    const action = deleteComment(0, 0);
    const newState = reducer(state, action);
    expect(newState).toEqual({ 0: ['goodbye'] });
  });
});
