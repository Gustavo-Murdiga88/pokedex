import Img from "next/image";

import { Button } from "./components/button";

import pokebool from "../../assets/icons/pokeballEclipse.png";
import { Tag } from "../card";
import { Heart } from "lucide-react";

export function Modal() {
	return (
		<div className="relative mx-auto max-h-[789px] w-[524px] drop-shadow-card">
			<div
				className="h-[789px] w-[524px]"
				style={{
					maskImage: "url(/assets/rectangle.svg)",
					WebkitMaskImage: "url(/assets/rectangle.svg)",
				}}
			>
				<header className="relative flex h-[240px] justify-end bg-fire">
					<div className="mb-4 mr-[39px] mt-auto flex h-[105px] w-[223px] flex-col items-start gap-1">
						<span className="text-md font-regular text-gray50">#004</span>
						<span className="mb-2 text-5xl font-extraBold leading-none text-gray50">
							Charmander
						</span>
						<Tag />
					</div>
					<Img
						className="absolute bottom-[-10px] left-[20px] blur-[6px]"
						src={pokebool}
						width={181}
						height={181}
						alt="pokeboll"
					/>
				</header>
				<button className="absolute right-[17px] top-[50px] rounded-md p-0 leading-none">
					<Heart size={40} />
				</button>
			</div>

			<main className=" absolute top-[240px] flex h-[561px] flex-col bg-gray50">
				<div className="mb-[20px] mt-[50px] flex justify-between px-[40px]">
					<Button active={false}>About</Button>
					<Button active>Stats</Button>
					<Button active={false}>Evolution</Button>
					<Button active={false}>Moves</Button>
				</div>
				<div className="flex flex-1 flex-col gap-8 bg-gray100 px-16 pb-[53px] pt-[40px]">
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam
						eum magnam ea modi asperiores sit harum, et eveniet. Totam dolore
					</span>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam
						eum magnam ea modi asperiores sit harum, et eveniet. Totam dolore
					</span>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam
						eum magnam ea modi asperiores sit harum, et eveniet. Totam dolore
					</span>
				</div>
			</main>
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
