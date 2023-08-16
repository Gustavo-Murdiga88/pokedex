import {
	ComponentProps,
	ElementRef,
	ForwardRefRenderFunction,
	ReactNode,
	forwardRef,
} from "react";

interface IButtonProps extends ComponentProps<"button"> {
	children: ReactNode;
	active: boolean;
}

const Component: ForwardRefRenderFunction<
	ElementRef<"button">,
	IButtonProps
> = ({ children, active, ...props }, ref) => {
	return (
		<button
			{...props}
			ref={ref}
			className={`rounded-md px-2 py-[2px] ${props.className}`}
		>
			<span
				data-active={active}
				className={`text-lg font-bold data-[active=true]:text-red dark:text-gray300 dark:data-[active=true]:text-gray50 ${props.className}`}
			>
				{children}
			</span>
		</button>
	);
};

export const Button = forwardRef(Component);
