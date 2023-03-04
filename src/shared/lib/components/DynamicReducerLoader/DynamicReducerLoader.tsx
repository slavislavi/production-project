import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [keyName in StateSchemaKey]?: Reducer;
};

interface DynamicReducerLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

export const DynamicReducerLoader: FC<DynamicReducerLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([keyName, reducer]) => {
            store.reducerManager.add(keyName as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${keyName} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([keyName, reducer]) => {
                    store.reducerManager.remove(keyName as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${keyName} reducer` });
                });
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
