import Img from "next/image";

import brand from "../../../assets/icons/brand.svg";
import pokeboll from "../../../assets/icons/pokeball.svg";
import { Home, User, Bell, Settings } from "lucide-react";

export function HeaderDesktop() {
	return (
		<header className="mt-16">
			<div className="mt-8 flex items-center justify-center">
				<Img src={brand} alt="bug" height={60} width={149}></Img>
			</div>

			<div className="mt-8 flex items-center justify-between px-[7.75rem] py-[1.375rem]">
				<div className="flex items-center justify-start gap-[40px]">
					<button className="flex items-center justify-center gap-[8px]  py-1 text-2xl font-bold">
						<Home size={28} />
						Home
					</button>
					<button className="flex items-center justify-center gap-[8px]  py-1 text-2xl font-bold">
						<Img src={pokeboll} alt="bug" height={28} width={29} />
						Favoritos
					</button>{" "}
					<button className="flex items-center justify-center gap-[8px]  py-1 text-2xl font-bold">
						<User size={28} />
						Perfil
					</button>
				</div>
				<div className="flex items-center justify-start gap-[46px]">
					<button className="flex items-center justify-center gap-[8px]  py-1 text-2xl font-bold">
						<Bell size={28} />
					</button>{" "}
					<button className="flex items-center justify-center gap-[8px]  py-1 text-2xl font-bold">
						<Settings size={28} />
					</button>
				</div>
			</div>
		</header>
	);
}
