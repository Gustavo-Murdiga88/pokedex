import Img from "next/image";

export function Spinner() {
	return (
		<span className="absolute bottom-[110px] left-1/2 flex -translate-x-1/2 items-center justify-center bp-2:bottom-5">
			<Img
				unoptimized
				className="animate-spinner"
				src="/assets/icon.svg"
				height={70}
				width={70}
				alt="poke ball"
			/>
		</span>
	);
}
