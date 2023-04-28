import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
    bindActionCreators, createSlice, CreateSliceOptions, SliceCaseReducers,
} from '@reduxjs/toolkit';

/**
 * Хук buildSlice дублирует логику createSlice + привязывает dispatch к каждому action;
 * Slice создаётся с помощью buildSlice (вместо createSlice);
 * Slice должен экпортировать наружу хук useActions, чтобы он был доступен;
 * Теперь в компоненте с помощью хука useActions достются все actions из slice,
 * каждый из которых можно вызвать напрямую, без dispatch.
 * См. компонент Counter
 */

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
    const slice = createSlice(options);

    const useActions = (): typeof slice.actions => {
        const dispatch = useDispatch();

        // @ts-ignore
        return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
    };

    return {
        ...slice,
        useActions,
    };
}
