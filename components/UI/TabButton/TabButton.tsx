import { FC } from 'react';

interface ButtonProps {
	title: string;
	selected: boolean;
	action: () => void;
}

const TabButton: FC<ButtonProps> = ({
	title,
	selected,
	action,
}: ButtonProps) => {
	return (
		<button
			onClick={action}
			className={`${
				selected ? 'text-white bg-red-500' : 'bg-white text-red-500'
			} w-full md:w-52 py-3 rounded-md uppercase font-bold text-xs mr-2 focus:outline-none`}
		>
			{title}
		</button>
	);
};

export default TabButton;
