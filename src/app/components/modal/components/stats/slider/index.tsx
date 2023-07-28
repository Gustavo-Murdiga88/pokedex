"use client";

import { useRef, useState, useEffect } from "react";

import { Colors, Theme } from "@/app/styles/design";

interface ISliderProps {
	attribute: string;
	color?: Colors;
	value: number;
}

export function Slider({ attribute, value, color = "red" }: ISliderProps) {
	const [width, setWidth] = useState<string | null>(null);
	const sliderRefContainer = useRef<HTMLDivElement>(null);

	console.log(width);

	useEffect(() => {
		(() => {
			if (sliderRefContainer.current) {
				let SLIDER_WIDTH = sliderRefContainer.current.clientWidth;
				console.log(sliderRefContainer.current.offsetWidth);

				if (SLIDER_WIDTH === 0) {
					setWidth("w-[0%]");

					return;
				}

				if (value > SLIDER_WIDTH) {
					setWidth("w-[100%]");
					return;
				}

				SLIDER_WIDTH = Math.ceil((value / SLIDER_WIDTH) * 100);
				setWidth(`${SLIDER_WIDTH}%`);
				return;
			}
		})();
	}, [value]);

	return (
		<div className="flex h-[19px] w-full items-center justify-start">
			<span className="mr-[20px] min-w-[59px] text-right text-lg font-regular text-gray500">
				{attribute}
			</span>
			<span className="mr-[12px] text-lg font-regular text-black">{value}</span>
			<div
				ref={sliderRefContainer}
				className="opacity flex h-[12px] min-w-full flex-1 rounded-full"
			>
				<div
					style={{
						width: width ?? "",
						backgroundColor: Theme.colors[color],
					}}
					className={`h-full w-0 rounded-full transition-all duration-[550ms]`}
				/>
			</div>
		</div>
	);
}
