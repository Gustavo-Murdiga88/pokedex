import { Colors } from "@/app/styles/design";

type Props = {
	name: string;
	icon: string;
	color: Colors;
};

type MappingTagProps = {
	[key: string]: Props;
};

export const MappingTag: MappingTagProps = {
	grass: {
		name: "Grass",
		color: "green400",
		icon: "/assets/tags/grass.svg",
	},

	poison: {
		name: "Poison",
		color: "purple200",
		icon: "/assets/tags/poison.svg",
	},

	fire: {
		name: "Fire",
		color: "red",
		icon: "/assets/tags/fire.svg",
	},

	flying: {
		name: "Flying",
		color: "cyan50",
		icon: "/assets/tags/flying.svg",
	},

	water: {
		name: "Water",
		color: "blue200",
		icon: "/assets/tags/water.svg",
	},

	normal: {
		name: "Normal",
		color: "brown500",
		icon: "/assets/tags/normal.svg",
	},

	eletric: {
		name: "Eletric",
		color: "orange100",
		icon: "/assets/tags/eletric.svg",
	},

	ground: {
		name: "Ground",
		color: "brown400",
		icon: "/assets/tags/ground.svg",
	},

	fairy: {
		name: "Fairy",
		color: "pink",
		icon: "/assets/tags/fairy.svg",
	},

	bug: {
		name: "Bug",
		color: "green300",
		icon: "/assets/tags/bug.svg",
	},

	fighting: {
		name: "Fighting",
		color: "black",
		icon: "/assets/tags/fighting.svg",
	},

	psychic: {
		name: "Psychic",
		color: "purple400",
		icon: "/assets/tags/psychic.svg",
	},

	rock: {
		name: "Rock",
		color: "brown100",
		icon: "/assets/tags/rock.svg",
	},

	steel: {
		name: "Steel",
		color: "gray700",
		icon: "/assets/tags/steel.svg",
	},

	ice: {
		name: "Ice",
		color: "cyan100",
		icon: "/assets/tags/ice.svg",
	},

	ghost: {
		name: "Ghost",
		color: "gray400",
		icon: "/assets/tags/ghost.svg",
	},

	dark: {
		name: "Dark",
		color: "gray900",
		icon: "/assets/tags/dark.svg",
	},

	dragon: {
		name: "Dragon",
		color: "blue300",
		icon: "/assets/tags/dragon.svg",
	},
} as const;

export type TagsTypeProps =
	| "grass"
	| "poison"
	| "fire"
	| "flying"
	| "water"
	| "normal"
	| "eletric"
	| "ground"
	| "fairy"
	| "bug"
	| "fighting"
	| "psychic"
	| "rock"
	| "steel"
	| "ice"
	| "ghost"
	| "dark"
	| "dragon";
