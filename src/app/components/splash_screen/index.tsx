import Img from "next/image";

export function SplashScreen() {
	return (
		<section className="fixed  inset-0 z-[999999999] flex h-screen w-screen items-center justify-center bg-black">
			<Img
				className="animate-bounce"
				src="/assets/icon.svg"
				height={167}
				width={167}
				alt="poke ball"
			/>
		</section>
	);
}
