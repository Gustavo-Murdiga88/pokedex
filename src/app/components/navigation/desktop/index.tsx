import { Bell, Settings } from "lucide-react";

import { NavigationContainer } from "../container";

export function HeaderDesktop() {
	return (
		<header className="mx-auto w-full border-b border-b-gray200 bg-gray50  px-4 bp-2:static bp-2:border-b-0 bp-2:px-8">
			<div className="flex items-center justify-between py-2 max-[600px]:mt-2 bp-2:mt-8  bp-2:py-[22px]">
				<NavigationContainer />
				<div className="flex items-center justify-start gap-[46px]  max-[600px]:w-full max-[600px]:justify-between">
					<button className="group flex items-center justify-center gap-[8px] rounded-2xl px-2 py-1  text-sm font-bold text-gray500 hover:text-red min-[640px]:text-2xl">
						<Bell size={25} />
					</button>
					<button className="group flex items-center justify-center gap-[8px] rounded-2xl px-2 py-1  text-sm font-bold text-gray500 hover:text-red min-[640px]:text-2xl">
						<Settings size={25} />
					</button>
				</div>
			</div>
		</header>
	);
}
