import Img from "next/image";

import brand from "assets/icons/brand.png";

export function Header() {
	return (
		<div
			id="header"
			className="mt-8 flex items-center justify-center max-[600px]:mt-0"
		>
			<Img
				style={{
					height: 60,
					width: 149,
				}}
				quality={100}
				className="max-[600px]:absolute max-[600px]:inset-x-[50%] max-[600px]:top-[80px] max-[600px]:-translate-x-1/2"
				src={brand}
				alt="bug"
				height={60}
				width={149}
			/>
		</div>
	);
}
