import Img from "next/image";

import { Tag } from "../../../../components/tag";

import genere from "../../../../assets/icons/genere.svg";
import height from "../../../../assets/icons/height.svg";
import weight from "../../../../assets/icons/weight.svg";

export function About() {
	return (
		<div className="flex h-full w-full flex-col gap-4 min-[600px]:gap-8">
			<span className="inline-block break-words text-lg font-regular leading-[24px] text-gray500">
				From the time it is born, a flame burns at the tip of its tail. Its life
				would end if the flame were to go out.
			</span>
			<section className="grid grid-cols-3 gap-y-6">
				<div>
					<span className="text-md font-medium text-gray500 ">Height</span>
					<div className="mt-[14px] flex items-end gap-1">
						<Img src={height} alt="height" height={18} width={18} />
						<span className="text-md leading-none">0,6</span>
					</div>
				</div>
				<div>
					<span className="text-md font-medium text-gray500 ">Weight</span>
					<div className="mt-[14px] flex items-end gap-1">
						<Img src={weight} alt="height" height={18} width={18} />
						<span className="text-md leading-none">8.5kg</span>
					</div>
				</div>
				<div>
					<span className="text-md font-medium text-gray500 ">Gender</span>
					<div className="mt-[14px] flex items-end gap-1">
						<Img src={genere} alt="height" height={18} width={18} />
						<span className="text-md leading-none">Male</span>
					</div>
				</div>
				<div>
					<span>Category</span>
					<div>
						<span>Lizard</span>
					</div>
				</div>
				<div>
					<span>Abilities</span>
					<div>
						<span>Blaze</span>
					</div>
				</div>
			</section>

			<footer className="flex flex-col gap-8 ">
				<div>
					<span>Weakenes</span>
					<div className="mt-3 flex gap-2">
						<Tag type="eletric" />
						<Tag type="eletric" />
						<Tag type="eletric" />
					</div>
				</div>
				<div>
					<span>Weakenes</span>
					<div className="mt-3 flex gap-2">
						<Tag type="eletric" />
						<Tag type="eletric" />
						<Tag type="eletric" />
					</div>
				</div>
			</footer>
		</div>
	);
}
