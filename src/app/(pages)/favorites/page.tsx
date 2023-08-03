import { HeaderDesktop } from "components/navigation/desktop";

import { ListFavorites } from "./list";

export default function Favorites() {
	return (
		<>
			<HeaderDesktop />
			<h1 className="br-2:px-8 mx-4 my-[5.125rem] w-[18.75rem] max-w-card-content text-left  text-6xl font-bold leading-10 max-[600px]:my-8 max-[600px]:mt-[8.5rem] max-[600px]:text-4xl bp-2:mx-8 bp-2:w-full">
				Meus Pokémons favoritos
			</h1>
			<ListFavorites />
		</>
	);
}
