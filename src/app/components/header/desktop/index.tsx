"use client";

import { PokeBoll } from "@/util/icons";
import { Home, User, Bell, Settings, Heart } from "lucide-react";
import { toast } from "react-toastify";

export function HeaderDesktop() {
	const notify = () => {
		toast.success("Success Notification !", {
			icon: <Heart className="fill-red stroke-black" />,
		});

		toast.error("Success Notification !", {
			icon: <Heart className=" stroke-black" />,
		});
	};

	return (
		<header className="mx-auto px-8">
			<div className="mt-8 flex items-center justify-between  py-[22px]">
				<div className="flex items-center justify-start gap-[32px]">
					<button
						onClick={notify}
						className="group flex items-center justify-center gap-[8px] rounded-2xl px-2 py-1  text-2xl font-bold text-gray500 hover:text-red"
					>
						<Home size={25} className="group-hover:stroke-red" />
						Home
					</button>
					<button className="group flex items-center justify-center gap-[8px] rounded-2xl px-2 py-1  text-2xl font-bold text-gray500 hover:text-red">
						<PokeBoll className="fill-gray500 group-hover:fill-red" size={25} />
						Favoritos
					</button>
					<button className="group flex items-center justify-center gap-[8px] rounded-2xl px-2 py-1  text-2xl font-bold text-gray500 hover:text-red">
						<User size={25} className="group-hover:stroke-red" />
						Perfil
					</button>
				</div>
				<div className="flex items-center justify-start gap-[46px]">
					<button className="group flex items-center justify-center gap-[8px] rounded-2xl px-2 py-1  text-2xl font-bold text-gray500 hover:text-red">
						<Bell size={25} className="group-hover:stroke-red" />
					</button>
					<button className="group flex items-center justify-center gap-[8px] rounded-2xl px-2 py-1  text-2xl font-bold text-gray500 hover:text-red">
						<Settings size={25} className="group-hover:stroke-red" />
					</button>
				</div>
			</div>
		</header>
	);
}
