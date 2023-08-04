import { NavigationContainer } from "../container";
import { NotificationsComponent } from "../notification";
import { ThemeMode } from "../theme_mode";

export function HeaderNavigation() {
	return (
		<header className="mx-auto w-full border-b border-b-gray200 px-4  dark:dark:bg-surface bp-2:static bp-2:border-b-0 bp-2:px-8">
			<div className="flex items-center justify-between py-2 max-[600px]:mt-2 bp-2:mt-8  bp-2:py-[22px]">
				<NavigationContainer />
				<div className="flex items-center justify-start gap-[46px]  max-[600px]:w-full max-[600px]:justify-between">
					<ThemeMode />
					<NotificationsComponent />
				</div>
			</div>
		</header>
	);
}
