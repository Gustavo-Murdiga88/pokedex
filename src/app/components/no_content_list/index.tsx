import Img from "next/image";
import Link from "next/link";

export function NoContent() {
	return (
		<div className=" mb-[100px] flex w-full flex-col items-start justify-normal gap-4 px-4 bp-2:flex-row bp-2:gap-[46px]">
			<div className="self-center">
				<Img
					className="max-h-[180px] w-full min-w-full max-w-[180px] flex-1 bp-2:max-h-[287px] bp-2:max-w-[330px]"
					src="assets/pikachu.svg"
					alt="pikachu"
					height={287}
					width={330}
				/>
			</div>
			<div className="flex max-w-[555px] flex-col">
				<p className="text-3xl font-bold leading-[150%] bp-2:text-4xl">
					Oh! Que pena, você ainda não possui pokémons favoritos. Retorne para a
					listagem e selecione os seus favoritos!
				</p>
				<Link
					href="/"
					className="bg-yellow100 ml-auto mt-10 flex w-[160px] items-center justify-center rounded-lg border border-black p-[9px] text-lg font-bold "
				>
					Voltar
				</Link>
			</div>
		</div>
	);
}
