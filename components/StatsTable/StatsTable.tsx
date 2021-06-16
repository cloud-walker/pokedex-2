import { FC } from 'react';
import InfoCell from '../UI/InfoCell';

interface TableProps {
	stats: Array<any>;
	color: string;
}

const StatsTable: FC<TableProps> = ({ stats, color }: TableProps) => {
	return (
		<div className='w-full md:my-32 md:mx-20 block p-8 md:px-12 h-full'>
			<div
				className={`${
					color != 'white' ? `bg-${color}-900` : 'bg-gray-300'
				} p-5 mt-4 rounded-t-md`}
			>
				<p
					className={`${
						color != 'white' && 'text-white'
					} text-xl uppercase font-bold max-w-xl`}
				>
					STATS
				</p>
			</div>
			{stats.map((stat, i) => (
				<div key={i}>
					<InfoCell
						color={color}
						attr={stat.stat.name}
						value={stat.base_stat}
					/>
				</div>
			))}
		</div>
	);
};

export default StatsTable;
