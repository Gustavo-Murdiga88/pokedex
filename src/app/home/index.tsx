import { Card } from "../components/card";
import { HeaderDesktop } from "../components/header/desktop";

export default function Home() {
	return (
		<>
			<HeaderDesktop />
			<h1 className="mx-auto my-[5.125rem] max-w-card-content px-8 text-left  text-6xl font-bold leading-[32px]">
				Qual Pokémon você está procurando?
			</h1>
			<main className="mx-auto grid min-h-[516px] w-full  max-w-card-content grid-cols-3 gap-x-[23px]  gap-y-[40px]  px-8 max-[1380px]:grid-cols-2 max-lg:grid-cols-1">
				<Card />
				<Card />
				<Card /> <Card />
				<Card />
				<Card /> <Card />
				<Card />
				<Card />
			</main>
		</>
	);
}
