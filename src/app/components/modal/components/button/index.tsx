import { ComponentProps, ReactNode } from "react";

interface IButtonProps extends ComponentProps<"button"> {
	children: ReactNode;
	active: boolean;
}

export function Button({ children, active, ...props }: IButtonProps) {
	return (
		<button
			{...props}
			className={`rounded-md px-2 py-[2px] ${props.className}`}
		>
			<span
				data-active={active}
				className={`border-b-2 text-lg font-bold data-[active=false]:border-b-gray50 data-[active=true]:text-red dark:text-gray300 dark:data-[active=false]:border-b-zinc800 dark:data-[active=true]:border-b-gray50 dark:data-[active=true]:text-gray50 ${props.className}`}
			>
				{children}
			</span>
		</button>
	);
}
