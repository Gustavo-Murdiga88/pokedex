"use client";

import { useRef, useEffect } from "react";

import { Colors } from "@/app/styles/design";

interface ISliderProps {
	attribute: string;
	color?: Colors;
	value: number;
}

export function Slider({ attribute, value, color = "red" }: ISliderProps) {
	const sliderRefContainer = useRef<HTMLDivElement>(null);
	const sliderChild = useRef<HTMLDivElement>(null);

	function removeSkeleton() {
		if (sliderRefContainer.current) {
			sliderRefContainer.current.classList.remove("animate-pulse");
			sliderRefContainer.current.classList.remove("bg-gray200");
		}
	}

	useEffect(() => {
		(() => {
			if (sliderRefContainer.current && sliderChild.current) {
				let SLIDER_WIDTH = sliderRefContainer.current?.clientWidth ?? 0;

				if (SLIDER_WIDTH === 0) {
					removeSkeleton();
					sliderChild.current.classList.add("w-[0%]");
					return;
				}

				if (value > SLIDER_WIDTH) {
					removeSkeleton();
					sliderChild.current.classList.add("w-[100%]");

					return;
				}

				SLIDER_WIDTH = Math.ceil((value / SLIDER_WIDTH) * 100);
				removeSkeleton();
				sliderChild.current.style.width = `${SLIDER_WIDTH}%`;
			}
		})();
	}, [value]);

	return (
		<div className="flex h-[19px] items-center justify-start">
			<span className="mr-[20px] min-w-[59px] text-right text-lg font-regular text-gray500">
				{attribute}
			</span>
			<span className="mr-[12px] text-lg font-regular text-black">{value}</span>
			<div
				ref={sliderRefContainer}
				className="flex h-[12px] flex-1 animate-pulse rounded-full bg-gray200"
			>
				<div
					ref={sliderChild}
					className={`h-full w-0 rounded-full bg-${color} transition-all duration-[550ms]`}
				/>
			</div>
		</div>
	);
}
