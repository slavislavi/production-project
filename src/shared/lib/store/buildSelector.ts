import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

type Selector<T> = (state: StateSchema) => T;
type Result<T> = [() => T, Selector<T>];

/**
 * Хук buildSelector возвращает кортеж:
 * (1): хук (использовать напрямую внутри компонентов вместо useSelector(selector))
 * (2): сам селектор (использовать в asyncThunks, в helpers)
 * Не нужно каждый раз в компонентах дёргать хук useSelector(),
 * поскольку он уже обёрнут в него.
 */

export function buildSelector<T>(selector: Selector<T>): Result<T> {
    const useSelectorHook = () => useSelector(selector);

    return [useSelectorHook, selector];
}
