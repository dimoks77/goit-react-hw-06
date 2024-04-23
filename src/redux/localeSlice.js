import { createSlice  } from "@reduxjs/toolkit";

const localSlice = createSlice({
    name: 'local',
    initialState: {
        lang: 'uk',
    },
    reducers: {
        changeLang: (state, action) => {
            state.lang = action.payload
        },
    },
});

export const { changeLang } = localSlice.actions;
export const localReducer = localSlice.reducer;
