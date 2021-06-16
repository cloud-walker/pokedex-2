import { FC } from 'react';

export interface InfoCellProps {
	color: string;
	attr: string;
	value: string | number;
}

const InfoCell: FC<InfoCellProps> = ({ color, attr, value }: InfoCellProps) => {
	return (
		<p
			className={`uppercase bg-white text-${color}-900 hover:bg-${color}-100 text-sm font-bold border-b ${
				color === 'white' && 'border-r border-l'
			} w-full p-5`}
		>
			{attr}: <span className='font-light'>{value}</span>
		</p>
	);
};

export default InfoCell;
