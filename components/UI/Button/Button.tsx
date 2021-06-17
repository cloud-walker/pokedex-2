import { FC } from 'react';
import Link from 'next/link';

interface ButtonProps {
	title: string;
	color: string;
	href?: any;
	action?: () => void;
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
				className={`${
					secondary
						? `text-${color}-500 bg-white`
						: `bg-${color}-900 text-white`
				} w-full md:w-96 text-center mt-4 px-8 py-5 rounded-md text-xs font-bold hover:opacity-80 uppercase`}
			>
				{title}
			</button>
		);
	}

	return (
		<Link href={href}>
			<a
				className={`${
					secondary
						? `text-${color}-500 bg-white`
						: `bg-${color}-900 text-white`
				} w-full md:w-96 text-center mt-4 px-8 py-5 rounded-md text-xs font-bold hover:opacity-80 uppercase`}
			>
				{title}
			</a>
		</Link>
	);
};

export default Button;
