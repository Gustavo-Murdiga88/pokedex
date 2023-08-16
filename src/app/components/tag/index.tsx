import { memo } from "react";

import Img from "next/image";

import { Theme } from "../../styles/theme";
import { MappingTag, TagsTypeProps } from "../card/types";

interface ITagProps {
	type: TagsTypeProps;
}

function Component({ type }: ITagProps) {
	const { color = "black100", icon, name } = MappingTag[type];

	return (
		<span
			className="flex min-w-fit rounded-full px-2 py-1 pr-3 text-sm font-regular text-gray50"
			style={{
				backgroundColor: Theme.colors[color],
			}}
		>
			<Img
				unoptimized
				className="-translate-y-px object-cover"
				src={icon}
				alt={name}
				style={{
					width: 18,
					height: 20,
				}}
				width={18}
				height={20}
			/>
			<span className="text-sm font-regular">{name}</span>
		</span>
	);
}

export const Tag = memo(Component);
