// library imports
import { createSlice } from "@reduxjs/toolkit";
import { ElementType } from "react";

// local
import { toggleMenu, togglePageLoading, setPageTitle } from "./actions";
import { StoreState } from "@/store";

// types
export interface PageTitle {
	title?: string;
	icon?: ElementType;
}

export type AppSliceState = {
	menuOpened: boolean;
	pageLoading: boolean;
	pageTitle: PageTitle;
};

// statics
const initialState: AppSliceState = {
	menuOpened: false,
	pageLoading: false,
	pageTitle: {
		title: undefined,
		icon: undefined,
	},
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		toggleMenuAction: toggleMenu,
		togglePageLoadingAction: togglePageLoading,
		setPageTitleAction: setPageTitle,
	},
});

export const { toggleMenuAction, togglePageLoadingAction, setPageTitleAction } = appSlice.actions;

// selectors - to pull info from global store
export const selectApp = (state: StoreState) => state.app;

export default appSlice.reducer;
