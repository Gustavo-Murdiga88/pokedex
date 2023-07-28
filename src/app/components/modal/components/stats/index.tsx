import { Slider } from "./slider";

export function Stats() {
	return (
		<div className="flex flex-1 flex-col gap-[31px] ">
			<Slider attribute="HP" value={35} />
			<Slider attribute="Attack" value={55} />
			<Slider attribute="Defense" value={40} />
			<Slider attribute="Sp. Atk" value={50} />
			<Slider attribute="Sp. Def" value={50} />
			<Slider attribute="Speed" value={50} />
			<Slider color="blue300" attribute="HP" value={90} />
			<div>
				<span className="mr-[20px] inline-block min-w-[59px] text-right font-regular text-gray500">
					Total
				</span>
				<span className="font-regular text-black">320</span>
			</div>
		</div>
	);
}
