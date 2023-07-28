import Img from "next/image";

export function Moves() {
	return (
		<ul className="w-full">
			<li className="flex items-center justify-between border-b border-b-gray200 py-2 pt-3">
				<span className="text-lg font-medium text-gray500">Tackle</span>
				<Img
					width={30}
					height={30}
					alt="medal"
					src={"/assets/tags/ground.svg"}
				/>
			</li>
			<li className="flex items-center justify-between border-b border-b-gray200 py-2 pt-3">
				<span className="text-lg font-medium text-gray500">Tackle</span>
				<Img
					width={30}
					height={30}
					alt="medal"
					src={"/assets/tags/ground.svg"}
				/>
			</li>{" "}
			<li className="flex items-center justify-between border-b border-b-gray200 py-2 pt-3">
				<span className="text-lg font-medium text-gray500">Tackle</span>
				<Img
					width={30}
					height={30}
					alt="medal"
					src={"/assets/tags/ground.svg"}
				/>
			</li>{" "}
			<li className="flex items-center justify-between border-b border-b-gray200 py-2 pt-3">
				<span className="text-lg font-medium text-gray500">Tackle</span>
				<Img
					width={30}
					height={30}
					alt="medal"
					src={"/assets/tags/ground.svg"}
				/>
			</li>{" "}
			<li className="flex items-center justify-between border-b border-b-gray200 py-2 pt-3">
				<span className="text-lg font-medium text-gray500">Tackle</span>
				<Img
					width={30}
					height={30}
					alt="medal"
					src={"/assets/tags/ground.svg"}
				/>
			</li>{" "}
			<li className="flex items-center justify-between border-b border-b-gray200 py-2 pt-3">
				<span className="text-lg font-medium text-gray500">Tackle</span>
				<Img
					width={30}
					height={30}
					alt="medal"
					src={"/assets/tags/ground.svg"}
				/>
			</li>
		</ul>
	);
}
