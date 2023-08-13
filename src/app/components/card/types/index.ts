import { Colors } from "styles/theme";

type Props = {
	name: string;
	icon: string;
	color: Colors;
	cardColor: Colors;
};

type MappingTagProps = {
	[key: string]: Props;
};

export const MappingTag: MappingTagProps = {
	grass: {
		name: "Grass",
		color: "green400",
		cardColor: "green200",
		icon: "/assets/tags/grass.svg",
	},

	poison: {
		cardColor: "pink300",
		name: "Poison",
		color: "purple200",
		icon: "/assets/tags/poison.svg",
	},

	fire: {
		cardColor: "orange200",
		name: "Fire",
		color: "red",
		icon: "/assets/tags/fire.svg",
	},

	flying: {
		cardColor: "cyan300",
		name: "Flying",
		color: "cyan50",
		icon: "/assets/tags/flying.svg",
	},

	water: {
		cardColor: "blue100",
		name: "Water",
		color: "blue200",
		icon: "/assets/tags/water.svg",
	},

	normal: {
		cardColor: "pink100",
		name: "Normal",
		color: "brown500",
		icon: "/assets/tags/normal.svg",
	},

	electric: {
		cardColor: "yellow",
		name: "Eletric",
		color: "orange100",
		icon: "/assets/tags/electric.svg",
	},

	ground: {
		cardColor: "brown300",
		name: "Ground",
		color: "brown400",
		icon: "/assets/tags/ground.svg",
	},

	fairy: {
		cardColor: "pink200",
		name: "Fairy",
		color: "pink",
		icon: "/assets/tags/fairy.svg",
	},

	bug: {
		cardColor: "green100",
		name: "Bug",
		color: "green300",
		icon: "/assets/tags/bug.svg",
	},

	fighting: {
		cardColor: "gray300",
		name: "Fighting",
		color: "black",
		icon: "/assets/tags/fighting.svg",
	},

	psychic: {
		cardColor: "purple300",
		name: "Psychic",
		color: "purple400",
		icon: "/assets/tags/psychic.svg",
	},

	rock: {
		cardColor: "brown200",
		name: "Rock",
		color: "brown100",
		icon: "/assets/tags/rock.svg",
	},

	steel: {
		cardColor: "gray600",
		name: "Steel",
		color: "gray700",
		icon: "/assets/tags/steel.svg",
	},

	ice: {
		cardColor: "cyan200",
		name: "Ice",
		color: "cyan100",
		icon: "/assets/tags/ice.svg",
	},

	ghost: {
		cardColor: "gray200",
		name: "Ghost",
		color: "gray400",
		icon: "/assets/tags/ghost.svg",
	},

	dark: {
		cardColor: "purple100",
		name: "Dark",
		color: "gray900",
		icon: "/assets/tags/dark.svg",
	},

	dragon: {
		cardColor: "cyan300",
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
	| "electric"
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
