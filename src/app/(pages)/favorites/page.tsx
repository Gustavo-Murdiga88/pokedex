import { Card } from "components/card";
import { HeaderDesktop } from "components/navigation/desktop";

export default function Favorites() {
	return (
		<>
			<HeaderDesktop />
			<h1 className="br-2:px-8 mx-4 my-[5.125rem] w-[18.75rem] max-w-card-content text-left  text-6xl font-bold leading-10 max-[600px]:my-8 max-[600px]:mt-[8.5rem] max-[600px]:text-4xl bp-2:mx-8 bp-2:w-full">
				Meus Pokémons favoritos
			</h1>
			<main className="br-2:mb-0 max-lg:grid-cols-1 mx-auto mb-[110px] grid min-h-[516px] w-full max-w-card-content grid-cols-3 gap-x-[23px] gap-y-[40px] px-3 max-[1380px]:grid-cols-2 max-[830px]:grid-cols-1 bp-2:px-8">
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
