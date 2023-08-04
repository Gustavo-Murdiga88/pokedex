import { ReactNode } from "react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface IDropDownTrigger extends DropdownMenu.DropdownMenuTriggerProps {
	children: ReactNode;
}

export function DropDownTrigger({ children, ...props }: IDropDownTrigger) {
	return (
		<DropdownMenu.Trigger
			{...props}
			className="group relative flex items-center justify-center gap-[8px] rounded-2xl px-2 py-1 text-sm font-bold  text-gray500 hover:text-red dark:text-gray300 dark:hover:text-gray50 min-[640px]:text-2xl"
		>
			{children}
		</DropdownMenu.Trigger>
	);
}
