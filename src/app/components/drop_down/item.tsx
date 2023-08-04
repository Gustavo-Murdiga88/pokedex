import { ReactNode } from "react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface IDropDownItem {
	children: ReactNode;
	lastChild?: boolean;
}

export function DropDownItem({ children, lastChild = false }: IDropDownItem) {
	return (
		<DropdownMenu.Item
			className={
				lastChild
					? "relative flex gap-4 border-b border-b-gray100 py-2 dark:border-b-zinc800"
					: "relative flex gap-4 border-b border-b-gray200 py-2 dark:border-b-gray400"
			}
		>
			{children}
		</DropdownMenu.Item>
	);
}
