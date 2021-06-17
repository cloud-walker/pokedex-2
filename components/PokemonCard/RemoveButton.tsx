import { FC } from 'react';

interface ButtonProps {
	title: string;
	action: () => void;
}

const RemoveButton: FC<ButtonProps> = ({ title, action }: ButtonProps) => {
	return (
		<button
			className={`w-full bg-red-400 hover:bg-red-500 py-2 rounded-b-md text-white font-semibold text-xs uppercase focus:outline-none`}
			onClick={action}
		>
			{title}
		</button>
	);
};

export default RemoveButton;
