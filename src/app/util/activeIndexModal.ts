interface IActiveIndex {
	left: number;
	width: number;
}

export function activeIndexModal({ left, width }: IActiveIndex) {
	document.documentElement.style.setProperty(
		"--modalMainControls",
		`${left + 8}px`,
	);
	document.documentElement.style.setProperty(
		"--modalMainControlsWidth",
		`${width - 16}px`,
	);
}
