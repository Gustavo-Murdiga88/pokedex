"use client";

import { useRef, useState, useEffect, ElementRef } from "react";

import { Colors, Theme } from "styles/theme";

interface ISliderProps {
	attribute: string;
	color?: Colors;
	value: number;
	capitalize: "capitalize" | "uppercase";
}

export function Slider({
	attribute,
	value,
	color = "red",
	capitalize,
}: ISliderProps) {
	const [width, setWidth] = useState<string | null>(null);
	const sliderRefContainer = useRef<ElementRef<"div">>(null);

	useEffect(() => {
		(() => {
			if (sliderRefContainer.current) {
				let SLIDER_WIDTH = sliderRefContainer.current.clientWidth;

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
		<div className="flex h-[19px] items-center justify-start">
			<span
				style={{
					textTransform: capitalize,
				}}
				className="mr-[20px] inline-block min-w-[70px] text-right text-sm font-medium text-gray500 bp-1:text-lg"
			>
				{attribute}
			</span>
			<span className="mr-[12px] min-w-[30px] text-left text-sm font-regular text-black bp-1:text-lg">
				{value}
			</span>
			<div
				ref={sliderRefContainer}
				className="opacity flex h-[12px] flex-1 rounded-full"
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
