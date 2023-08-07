import { memo } from "react";

import Img from "next/image";

import { IPokemonFormattedProps } from "usecases/fetch_pokemon";

import { TagsTypeProps } from "components/card/types";

interface IMovesProps {
	tag: TagsTypeProps;
	moves: IPokemonFormattedProps["moves"];
}

function Component({ moves, tag }: IMovesProps) {
	return (
		<div
			id="moves"
			role="button"
			tabIndex={-1}
			className="fixed top-0 h-[348px] w-full touch-pan-y snap-center overflow-auto bp-2:h-[400px]"
			onTouchStart={(e) => {
				e.stopPropagation();

				e.currentTarget.focus();
				document.getElementById("main")!.style.overflow = "hidden";
			}}
			onTouchEnd={(e) => {
				e.stopPropagation();
				document.getElementById("main")!.style.overflow = "auto";
			}}
			onTouchMove={(e) => {
				e.stopPropagation();
			}}
		>
			<ul>
				{moves.map(({ name }) => {
					const move = name.replace("-", " ");
					return (
						<li
							role="menuitem"
							key={move}
							className="flex items-center justify-between border-b border-b-gray200 py-2 pl-1 pt-3 capitalize"
						>
							<span className="text-sm font-medium text-gray500 dark:text-gray50 bp-1:text-lg">
								{name}
							</span>
							<Img
								className="h-[18px] w-[18px] bp-1:h-[30px] bp-1:w-[30px]"
								width={30}
								height={30}
								alt="medal"
								src={`/assets/tags/${tag}.svg`}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export const Moves = memo(Component);
