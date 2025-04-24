// library imports
import { PayloadAction } from "@reduxjs/toolkit";

// local
import { AppSliceState, PageTitle } from ".";

export const toggleMenu = (state: AppSliceState, action: PayloadAction<boolean | undefined>) => {
    if (action.payload === undefined) {
        state.menuOpened = !state.menuOpened;
        return;
    }

    state.menuOpened = action.payload;
};

export const togglePageLoading = (state: AppSliceState, action: PayloadAction<boolean | undefined>) => {
    if (action.payload === undefined) {
        state.pageLoading = !state.pageLoading;
        return;
    }

    state.pageLoading = action.payload;
};

export const setPageTitle = (state: AppSliceState, action: PayloadAction<PageTitle>) => {
    state.pageTitle = action.payload;
};
