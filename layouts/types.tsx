// library imports
import { ReactElement } from "react";

// types
export interface Layout {
    (page: ReactElement): JSX.Element;
}

export type LayoutProps = {
    pageTitle?: string;
    pageDescription?: string;
    mainClassName?: string;
    withAuth?: boolean;
};
