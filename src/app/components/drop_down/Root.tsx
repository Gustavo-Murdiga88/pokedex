import { ReactNode } from "react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface IDropDownRoot {
	children: ReactNode;
}

export function DropDownRoot({ children }: IDropDownRoot) {
	return <DropdownMenu.Root modal>{children}</DropdownMenu.Root>;
}
