// library imports
import { useDispatch, useSelector } from "react-redux";

// local
import {
	selectApp,
	toggleMenuAction,
	togglePageLoadingAction,
	setPageTitleAction,
	PageTitle,
} from "@/store/slices/appSlice";
import { StoreDispatch } from "@/store";

// hook
export function useApp() {
	const { menuOpened, pageLoading, pageTitle } = useSelector(selectApp);

	const dispatch = useDispatch<StoreDispatch>();

	const toggleMenu = (toggle?: boolean) => dispatch(toggleMenuAction(toggle));

	const togglePageLoading = (toggle?: boolean) => dispatch(togglePageLoadingAction(toggle));

	const setPageTitle = (pageTitle: PageTitle) => dispatch(setPageTitleAction(pageTitle));

	return {
		menuOpened,
		toggleMenu,
		pageLoading,
		togglePageLoading,
		pageTitle,
		setPageTitle,
	};
}
