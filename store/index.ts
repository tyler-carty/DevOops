// library imports
import { configureStore } from "@reduxjs/toolkit";

// local
import app from "./slices/appSlice";

// store
export const store = configureStore({
    reducer: {
        app,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                // ignoredActions: ["your/action/type"],
                // Ignore these field paths in all actions
                ignoredActionPaths: ["payload.icon"],
                // Ignore these paths in the state
                ignoredPaths: ["app.pageTitle.icon"],
            },
        }),

    devTools: process.env.NODE_ENV !== "production",
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
