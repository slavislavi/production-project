import { MutableRefObject, useCallback, useRef } from 'react';

/**
 * Хук, который позволяет отменять предыдущий вызов функции пока не истечет delay.
 * @param callback - целевой колбэк
 * @param delay - задержка в миллисекундах
 */

export function useDebounce<T>(callback: (...args: T[]) => void, delay: number) {
    const timer = useRef() as MutableRefObject<any>;

    return useCallback((...args: T[]) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}
