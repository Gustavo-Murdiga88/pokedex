"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { PokeBoll } from "@/util/icons";
import { Home, User } from "lucide-react";

export function NavigationContainer() {
	const path = usePathname();

	return (
		<div className="flex items-center justify-start gap-[32px] max-[600px]:fixed max-[600px]:inset-x-0 max-[600px]:bottom-0 max-[600px]:z-10 max-[600px]:h-[px] max-[600px]:justify-between max-[600px]:border-t max-[600px]:border-t-gray300 max-[600px]:bg-gray50 max-[600px]:px-[45px] max-[600px]:py-[20px]">
			<Link
				data-arepage={path === "/"}
				href="/"
				prefetch
				className="group flex  items-center justify-center gap-[8px] rounded-2xl px-2 py-1 text-sm font-bold text-gray500 hover:text-red data-[arepage=true]:font-bold data-[arepage=true]:text-red max-[600px]:flex-col max-[600px]:gap-2 min-[640px]:text-2xl"
			>
				<Home
					size={25}
					className="group-hover:stroke-red  min-[600px]:h-[25px] min-[600px]:w-[25px] "
				/>
				Home
			</Link>
			<Link
				data-arepage={path === "/favorites"}
				href="/favorites"
				prefetch
				className="group flex  items-center justify-center gap-[8px] rounded-2xl  px-2 py-1 text-sm font-bold text-gray500 hover:text-red data-[arepage=true]:font-bold data-[arepage=true]:text-red max-[600px]:flex-col max-[600px]:gap-2 min-[640px]:text-2xl"
			>
				<PokeBoll className="fill-gray500 group-hover:fill-red  min-[600px]:h-[25px] min-[600px]:w-[25px] " />
				Favoritos
			</Link>
			<Link
				data-arepage={path === "/profile"}
				href="/profile"
				prefetch
				className="group flex  items-center justify-center gap-[8px] rounded-2xl  px-2 py-1 text-sm font-bold text-gray500 hover:text-red data-[arepage=true]:font-bold data-[arepage=true]:text-red max-[600px]:flex-col max-[600px]:gap-2 min-[640px]:text-2xl"
			>
				<User
					size={25}
					className="group-hover:stroke-red  min-[600px]:h-[25px] min-[600px]:w-[25px] "
				/>
				Perfil
			</Link>
		</div>
	);
}
