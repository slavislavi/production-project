const firstCharUpperCase = require('../firstCharUpperCase');
const firstCharLowerCase = require('../firstCharLowerCase');

module.exports = (sliceName) => {
    const schemaTypeName = `${firstCharUpperCase(sliceName)}Schema`;
    const sliceNameLower = firstCharLowerCase(sliceName);

    return `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ${schemaTypeName} } from '../types/${sliceName}Schema';

const initialState: ${schemaTypeName} = {};

export const ${sliceNameLower}Slice = createSlice({
    name: '${sliceNameLower}',
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

export const { actions: ${sliceNameLower}Actions } = ${sliceNameLower}Slice;
export const { reducer: ${sliceNameLower}Reducer } = ${sliceNameLower}Slice;
`;
};
