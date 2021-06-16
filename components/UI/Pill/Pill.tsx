import { FC } from 'react';

interface PillProps {
	color: string;
	title: string;
}

const Pill: FC<PillProps> = ({ color, title }: PillProps) => {
	return (
		<p
			className={`uppercase font-bold text-xs my-2 bg-${color}-200 ${
				color != 'white'
					? `text-${color}-900 bg-${color}-200`
					: `bg-gray-300`
			} rounded-full px-4 py-2 w-1/4 text-center`}
		>
			{title}
		</p>
	);
};

export default Pill;
