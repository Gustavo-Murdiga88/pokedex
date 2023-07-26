import Img from "next/image";

import { Tag } from "../card";
import { Heart } from "lucide-react";

export function Modal() {
	return (
		<div className="relative max-h-[789px] w-[524px]">
			<div
				className="h-[789px] w-[524px]"
				style={{
					maskImage: "url(/assets/rectangle.svg)",
					WebkitMaskImage: "url(/assets/rectangle.svg)",
				}}
			>
				<header className="flex h-[240px] justify-end bg-fire">
					<div className="mb-4 mr-[39px] mt-auto flex h-[105px] w-[223px] flex-col items-start gap-1">
						<span className="text-md font-regular text-gray50">#004</span>
						<span className="mb-2 text-5xl font-extraBold leading-none text-gray50">
							Charmander
						</span>
						<Tag />
					</div>
				</header>

				<Heart className="absolute right-[17px] top-[50px]" size={40} />
			</div>
			<Img
				id="pokemon"
				className="absolute left-[20px] top-[30px]"
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
				width={236}
				height={251}
				alt="Pokemon"
			/>
		</div>
	);
}
