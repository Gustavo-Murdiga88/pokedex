import Img from "next/image";
import Link from "next/link";

import { HeaderDesktop } from "components/navigation/desktop";

import git from "assets/icons/git.svg";
import insta from "assets/icons/insta.svg";
import linkedin from "assets/icons/linkedin.svg";
import notion from "assets/icons/notion.svg";
import whats from "assets/icons/whats.svg";

export default function Profile() {
	return (
		<main className="mx-auto px-8 pb-[100px]">
			<HeaderDesktop />
			<aside className="mt-[136px] px-8 bp-2:mr-auto bp-2:mt-[80px] bp-2:w-[671px]">
				<div className="relative mb-[2rem] flex flex-col items-center justify-center bp-2:items-start">
					<div className="mb-[32px] rounded-full border-[3.04px] border-blue300 bp-2:mb-[40px]">
						<Img
							src="https://avatars.githubusercontent.com/u/74632138?v=4"
							width={140}
							height={140}
							alt="Avatar"
							className="rounded-full border-[4.96px] border-yellow"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<h1 className="text-center text-4xl font-bold leading-none text-gray900 bp-2:text-left">
							Gustavo Murdiga
						</h1>
						<h3 className="mb-[56px] text-center text-sm font-regular text-gray400 bp-2:mb-0 bp-2:text-left">
							Dev. full-stack at Guarani sistemas
						</h3>
					</div>
					<div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 justify-center  gap-4 bp-2:bottom-[105px] bp-2:right-0 bp-2:ml-auto bp-2:mr-[105px] bp-2:-translate-x-0 ">
						<button className="w-[107px] rounded-[16px] bg-gray900 py-1 font-regular text-gray50">
							Follow
						</button>
						<button className="w-[107px] rounded-[16px] bg-gray300 py-1 font-regular text-gray900">
							message
						</button>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="text-lg font-medium text-gray500">Sobre mim</h3>
					<p className="rounded-[24px] bg-gray100 p-4 text-md font-regular leading-[1.125rem] text-gray500 ">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
						viverra nam libero justo. Sed id semper risus in hendrerit.
					</p>
				</div>
				<div className="mt-4 flex flex-col gap-4">
					<h3 className="text-lg font-medium text-gray500">Sobre o projeto</h3>
					<p className="rounded-[24px] bg-gray100 p-4 text-md font-regular leading-[1.125rem] text-gray500 ">
						Protótipo realizado para Guarani Sistemas para o teste para a vaga
						de Desenvolvedor Flutter Pleno.
					</p>
				</div>

				<div className="my-[37px] flex justify-between rounded-full bg-gray100 px-[30px] py-4">
					<Link href="/" target="_blank">
						<Img src={linkedin} height={32} width={32} alt="leading" />
					</Link>
					<Link href="/" target="_blank">
						<Img src={insta} height={32} width={32} alt="leading" />
					</Link>
					<Link href="/" target="_blank">
						<Img src={git} height={32} width={32} alt="leading" />
					</Link>
					<Link href="/" target="_blank">
						<Img src={notion} height={32} width={32} alt="leading" />
					</Link>
					<Link href="/" target="_blank">
						<Img src={whats} height={32} width={32} alt="leading" />
					</Link>
				</div>
			</aside>
		</main>
	);
}
