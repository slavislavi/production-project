import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('test with one param', () => {
        const param = getQueryParams({ test: 'value' });
        expect(param).toBe('?test=value');
    });

    test('test with multiply params', () => {
        const params = getQueryParams({ test: 'value', rest: 'menu', fest: '22' });
        expect(params).toBe('?test=value&rest=menu&fest=22');
    });

    test('test with undefined', () => {
        const param = getQueryParams({ test: 'value', rest: undefined });
        expect(param).toBe('?test=value');
    });
});
