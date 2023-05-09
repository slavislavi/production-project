import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

type Selector<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

/**
 * Хук buildSelector возвращает кортеж:
 * (1): хук (использовать напрямую внутри компонентов вместо useSelector(selector))
 * (2): сам селектор (использовать в asyncThunks, в helpers)
 * Не нужно каждый раз в компонентах дёргать хук useSelector(),
 * поскольку он уже обёрнут в него.
 */

export function buildSelector<T, Args extends any[]>(selector: Selector<T, Args>): Result<T, Args> {
    const useSelectorHook: Hook<T, Args> = (...args: Args) => useSelector(
        (state: StateSchema) => selector(state, ...args),
    );

    return [useSelectorHook, selector];
}
