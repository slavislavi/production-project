import { AddCommentFormSchema } from '../types/addCommentFormSchema';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('addCommentForm', () => {
    test('test setText as comment', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: 'ratatatata' };
        expect(addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setText('bang bang'))).toEqual({ text: 'bang bang' });
    });
});
