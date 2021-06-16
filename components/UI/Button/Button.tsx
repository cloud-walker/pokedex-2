import { FC } from 'react';
import Link from 'next/link';

interface ButtonProps {
	title: string;
	color: string;
	href?: any;
	action?: any;
	secondary?: boolean;
}

const Button: FC<ButtonProps> = ({
	title,
	color,
	href,
	action,
	secondary,
}: ButtonProps) => {
	if (action) {
		return (
			<button
				onClick={action}
				className={
					secondary
						? `w-full md:w-96 text-center text-${color}-500 bg-white mt-4 px-8 py-5 rounded-md text-xs font-bold hover:opacity-80 uppercase`
						: `w-full md:w-96 text-center bg-${color}-900 text-white mt-2 px-8 py-5 rounded-md text-xs font-bold hover:opacity-80 uppercase`
				}
			>
				{title}
			</button>
		);
	}

	return (
		<Link href={href}>
			<a
				className={
					secondary
						? `w-full md:w-96 text-center text-${color}-500 bg-white mt-4 px-8 py-5 rounded-md text-xs font-bold hover:opacity-80 uppercase`
						: `w-full md:w-96 text-center bg-${color}-900 text-white mt-2 px-8 py-5 rounded-md text-xs font-bold hover:opacity-80 uppercase`
				}
			>
				{title}
			</a>
		</Link>
	);
};

export default Button;
