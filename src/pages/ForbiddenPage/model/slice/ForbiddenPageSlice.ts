import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ForbiddenPageSchema } from '../types/ForbiddenPageSchema';

const initialState: ForbiddenPageSchema = {};

export const forbiddenPageSlice = createSlice({
    name: 'forbiddenPage',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {},
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: forbiddenPageActions } = forbiddenPageSlice;
export const { reducer: forbiddenPageReducer } = forbiddenPageSlice;
