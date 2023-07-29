import Img from "next/image";

import { Theme } from "../../styles/theme";
import { MappingTag, TagsTypeProps } from "../card/types";

interface ITagProps {
	type: TagsTypeProps;
}

export function Tag({ type }: ITagProps) {
	const { color, icon, name } = MappingTag[type];

	return (
		<span
			className="flex rounded-full px-2 py-1 pr-3 text-sm font-regular text-gray50"
			style={{
				backgroundColor: Theme.colors[color],
			}}
		>
			<Img
				className="object-cover"
				src={icon}
				alt={name}
				width={18}
				height={20}
			/>
			<span className="text-lg font-regular">{name}</span>
		</span>
	);
}
