import { Card } from "../components/card";
import { HeaderDesktop } from "../components/header/desktop";

export default function Home() {
	return (
		<>
			<HeaderDesktop />
			<h1 className="my-[5.125rem] px-[8rem] text-left text-6xl font-bold leading-[32px]">
				Qual Pokémon você está procurando?
			</h1>
			<main className="grid w-full grid-cols-3 gap-x-[23px] gap-y-[40px] px-[124px]">
				<Card />
				<Card />
				<Card />
			</main>
		</>
	);
}
