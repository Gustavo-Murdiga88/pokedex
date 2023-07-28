import { Card } from "../components/card";
import { HeaderDesktop } from "../components/navigation/desktop";

export default function Home() {
	return (
		<>
			<HeaderDesktop />
			<h1 className="mx-auto my-[5.125rem] max-w-card-content px-8 text-left text-6xl font-bold leading-10 max-[600px]:my-8 max-[600px]:mt-[80px] max-[600px]:text-4xl">
				Qual Pokémon você está procurando?
			</h1>
			<main className="max-lg:grid-cols-1 mx-auto grid min-h-[516px]  w-full max-w-card-content grid-cols-3  gap-x-[23px]  gap-y-[40px] px-8 max-[1380px]:grid-cols-2 max-[830px]:grid-cols-1">
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
