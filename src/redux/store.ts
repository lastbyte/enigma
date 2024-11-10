import {configureStore, createStore} from "@reduxjs/toolkit";
import AppUiSlice, {AppUiState} from "./slices/AppUiSlice";

export type RootState = {
    appUi: AppUiState
};

const store = configureStore({
    reducer: {
        appUi: AppUiSlice.reducer,
    },
})

export default store;
