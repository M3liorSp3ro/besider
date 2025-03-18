import { newsReducer } from "@entities/News";
import { configureStore } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: {
        news: newsReducer
    }
})

export default store;