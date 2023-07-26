import { ComponentProps, ReactNode } from "react";

interface IButtonProps extends ComponentProps<"button"> {
	children: ReactNode;
	active: boolean;
}

export function Button({ children, active, ...props }: IButtonProps) {
	return (
		<button {...props} className={`rounded-md ${props.className}`}>
			<span
				data-active={active}
				className={`rounded-md border-b-2 p-1 text-lg font-bold data-[active=false]:border-b-gray50 data-[active=true]:border-b-red data-[active=true]:text-red${props.className}`}
			>
				{children}
			</span>
		</button>
	);
}
