"use client";

import { Home, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { PokeBoll } from "util/icons";

export function NavigationContainer() {
	const path = usePathname();

	// function handleChangePage() {
	// 	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// 	//@ts-ignore
	// 	if (document.startViewTransition) {
	// 		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// 		//@ts-ignore
	// 		document.startViewTransition();
	// 	}
	// }

	return (
		<div className="flex hidden items-center justify-start gap-[32px] max-[600px]:fixed max-[600px]:inset-x-0 max-[600px]:bottom-0 max-[600px]:z-[99999999] max-[600px]:h-[px] max-[600px]:justify-between max-[600px]:border-t max-[600px]:border-t-gray300 max-[600px]:bg-gray50 max-[600px]:px-[45px] max-[600px]:py-[15px] dark:max-[600px]:bg-zinc800">
			<Link
				// onClick={handleChangePage}
				data-arepage={path === "/"}
				href="/"
				prefetch
				className="group flex items-center justify-center gap-[8px] rounded-2xl px-2 py-1 text-sm font-bold text-gray500 hover:text-red data-[arepage=true]:font-bold data-[arepage=true]:text-red dark:text-gray300 dark:hover:text-gray50 dark:data-[arepage=true]:text-gray50 max-[600px]:flex-col max-[600px]:gap-2 min-[640px]:text-2xl"
			>
				<Home
					size={25}
					className="group-hover:stroke-red dark:stroke-gray300 dark:group-hover:stroke-gray50 dark:group-data-[arepage=true]:stroke-gray50 min-[600px]:h-[25px] min-[600px]:w-[25px] "
				/>
				Home
			</Link>
			<Link
				// onClick={handleChangePage}
				data-arepage={path === "/favorites"}
				href="/favorites"
				prefetch
				className="group flex items-center justify-center gap-[8px] rounded-2xl px-2 py-1 text-sm  font-bold text-gray500 hover:text-red data-[arepage=true]:font-bold data-[arepage=true]:text-red dark:text-gray300 dark:hover:text-gray50 dark:data-[arepage=true]:text-gray50 max-[600px]:flex-col max-[600px]:gap-2 min-[640px]:text-2xl"
			>
				<PokeBoll className="fill-gray500 group-hover:fill-red group-data-[arepage=true]:fill-red dark:fill-gray300 dark:group-hover:fill-gray50 dark:group-data-[arepage=true]:fill-gray50  min-[600px]:h-[25px] min-[600px]:w-[25px]" />
				Favoritos
			</Link>
			<Link
				// onClick={handleChangePage}
				data-arepage={path === "/profile"}
				href="/profile"
				prefetch
				className="group flex items-center justify-center gap-[8px] rounded-2xl px-2 py-1 text-sm  font-bold text-gray500 hover:text-red data-[arepage=true]:font-bold data-[arepage=true]:text-red dark:text-gray300 dark:hover:text-gray50 dark:data-[arepage=true]:text-gray50 max-[600px]:flex-col max-[600px]:gap-2 min-[640px]:text-2xl"
			>
				<User
					size={25}
					className="group-hover:stroke-red dark:stroke-gray300 dark:group-hover:stroke-gray50 dark:group-data-[arepage=true]:stroke-gray50  min-[600px]:h-[25px] min-[600px]:w-[25px] "
				/>
				Perfil
			</Link>
		</div>
	);
}
