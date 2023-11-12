import React from "react";

type SharedButtonProps = {
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SharedButton = ({ children, ...props }: SharedButtonProps) => {
	return (
		<button
			className="rounded-xl bg-green-500 py-2 px-2.5 text-white hover:bg-green-600"
			{...props}
		>
			{children}
		</button>
	);
};
