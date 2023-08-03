import Img from "next/image";

export function Spinner() {
	return (
		<span className="absolute bottom-20 left-1/2 flex -translate-x-1/2 items-center justify-center">
			<Img
				className="animate-spinner"
				src="/assets/icon.svg"
				height={70}
				width={70}
				alt="poke ball"
			/>
		</span>
	);
}
