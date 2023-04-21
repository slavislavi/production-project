import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RatingCardSchema } from '../types/RatingCardSchema';

const initialState: RatingCardSchema = {};

export const ratingCardSlice = createSlice({
    name: 'ratingCard',
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

export const { actions: ratingCardActions } = ratingCardSlice;
export const { reducer: ratingCardReducer } = ratingCardSlice;
