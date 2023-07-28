import { NavigationContainer } from "../container";
import { Bell, Settings } from "lucide-react";

export function HeaderDesktop() {
	return (
		<header className="mx-auto px-8">
			<div className="mt-8 flex items-center justify-between py-[22px]  max-[600px]:mt-2">
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
