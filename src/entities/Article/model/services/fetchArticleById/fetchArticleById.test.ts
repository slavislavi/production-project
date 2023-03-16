import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleType } from '../../types/article';
import { fetchArticleById } from './fetchArticleById';

const data = {
    id: '1',
    title: 'JavaScipt Today',
    subtitle: 'What is new in JS in 2022?',
    img: 'src',
    views: 124,
    createdAt: '24.02.2022',
    type: [ArticleType.IT],
    blocks: ['Hello everyone! Hope that sunny summer weather does not cool off your interest in the latest developments in the JavaScript world. Expecially since many noteworthy updates have been released in June and I’m excited to share them with you.'],
};

describe('fetchArticleById API service', () => {
    test('success fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('-1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
