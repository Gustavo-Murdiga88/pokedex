import { ReactNode } from "react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface IDropDownContent {
	children: ReactNode;
}

export function DropDownContent({ children }: IDropDownContent) {
	return (
		<DropdownMenu.Portal>
			<DropdownMenu.Content
				sticky="always"
				loop
				sideOffset={5}
				alignOffset={10}
				className="inset-0 z-50 h-screen w-screen snap-y snap-mandatory scroll-p-8 overflow-y-auto scroll-smooth rounded-lg border border-gray300 bg-gray100 p-4 dark:border-zinc800 dark:bg-zinc800 bp-2:max-h-[370px] bp-2:w-[380px]"
				align="end"
			>
				{children}
			</DropdownMenu.Content>
		</DropdownMenu.Portal>
	);
}
