import Img from "next/image";
import Link from "next/link";

import git from "assets/icons/git.svg";
import linkedin from "assets/icons/linkedin.svg";
import notion from "assets/icons/notion.svg";

import { HeaderNavigation } from "@/app/components/navigation/header";

export default function Profile() {
	return (
		<main className="mx-auto pb-[100px]">
			<HeaderNavigation />
			<aside className="mt-[136px] px-8 bp-2:mr-auto bp-2:mt-[80px] bp-2:w-[671px]">
				<div className="relative mb-[2rem] flex flex-col items-center justify-center bp-2:items-start">
					<div className="mb-[32px] rounded-full border-[3.04px] border-blue300 bp-2:mb-[40px]">
						<Img
							unoptimized
							src="https://avatars.githubusercontent.com/u/74632138?v=4"
							width={140}
							height={140}
							alt="Avatar"
							className="rounded-full border-[4.96px] border-yellow"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<h1 className="text-center text-4xl font-bold leading-none text-gray900 dark:text-gray200 bp-2:text-left">
							Gustavo Murdiga
						</h1>
						<h3 className="mb-[56px] text-center text-sm font-regular text-gray400 dark:text-gray50 bp-2:mb-0 bp-2:text-left">
							Dev. full-stack at Guarani sistemas
						</h3>
					</div>
					<div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 justify-center  gap-4 bp-2:bottom-[105px] bp-2:right-0 bp-2:ml-auto bp-2:mr-[105px] bp-2:-translate-x-0 ">
						<a
							href="https://github.com/Gustavo-Murdiga88"
							target="_blank"
							className="w-[107px] rounded-[16px] bg-gray900 py-1 text-center font-regular text-gray50 dark:text-gray50"
						>
							Follow
						</a>
						<a
							href="mailto:gumurdiga@gmail.com"
							className="w-[107px] rounded-[16px] bg-gray300 py-1 text-center font-regular text-gray900 dark:text-gray50 "
						>
							message
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="text-lg font-medium text-gray500 dark:text-gray50">
						Sobre mim
					</h3>
					<p className="rounded-[24px] bg-gray100 p-4 text-md  font-regular leading-[1.125rem] text-gray500 dark:bg-zinc800 dark:text-gray50 ">
						Olá, me chamo Gustavo Murdiga. Tenho 24 anos de vida e atualmente
						trabalho como desenvolvedor full stack. Sou completamente apaixonado
						por novas tecnologias como ReactJS, NextJS, NodeJS e flutter muitas
						outras presentes nesse maravilho mundo.
					</p>
				</div>
				<div className="mt-4 flex flex-col gap-4">
					<h3 className="text-lg font-medium text-gray500 dark:text-gray50">
						Sobre o projeto
					</h3>
					<p className="rounded-[24px] bg-gray100 p-4 text-md font-regular leading-[1.125rem] text-gray500 dark:bg-zinc800 dark:text-gray50 ">
						Este projeto foi criado para a conclusão de um desafio pessoal, pois
						achei este layout muito bonito e realmente seria um bom projeto para
						o meu portfólio. Caso queria se sinta a vontade para visualizar o
						projeto
						<a
							target="_blank"
							href="https://github.com/Gustavo-Murdiga88/pokedex"
							className="px-1 text-blue100"
						>
							aqui
						</a>{" "}
						criar um PR ou dar sugestões de melhoria
					</p>
				</div>

				<div className="my-[37px] flex justify-between rounded-full bg-gray100 px-[30px] py-4 dark:bg-zinc800  bp-2:justify-center bp-2:gap-6">
					<Link
						className="rounded-lg leading-none"
						href="https://www.linkedin.com/in/gustavo-murdiga-055470178/"
						target="_blank"
					>
						<Img
							unoptimized
							src={linkedin}
							height={32}
							width={32}
							alt="leading"
						/>
					</Link>
					<Link
						className="rounded-lg leading-none"
						href="https://github.com/Gustavo-Murdiga88"
						target="_blank"
					>
						<Img
							unoptimized
							src={git}
							height={32}
							width={32}
							alt="leading"
							className="dark:invert"
						/>
					</Link>
					<Link
						className="rounded-lg leading-none"
						href="https://shared-countess-9d4.notion.site/Bibliotecas-React-7cfad76bd81d442b98f3dadd3519ff75?pvs=4"
						target="_blank"
					>
						<Img
							unoptimized
							src={notion}
							height={32}
							width={32}
							alt="leading"
							className="dark:invert"
						/>
					</Link>
				</div>
			</aside>
		</main>
	);
}
