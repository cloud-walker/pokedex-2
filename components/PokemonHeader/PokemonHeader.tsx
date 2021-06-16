import { FC } from 'react';
import Pill from '../UI/Pill';

interface HeaderProps {
	name: string;
	japName: string;
	type: string;
	color: string;
	id: number;
	owned?: boolean;
}

const PokemonHeader: FC<HeaderProps> = ({
	name,
	japName,
	type,
	color,
	id,
	owned,
}: HeaderProps) => {
	return (
		<>
			<div className='inline-flex items-center'>
				<span
					className={`${
						color != 'white' && 'text-white'
					} text-xl md:text-2xl z-10 opacity-80 mr-2`}
				>
					#{id}
				</span>
				{owned && <img src='/pokeball.png' className='w-10' />}
			</div>
			<Pill title={type} color={color} />
			<h1
				className={`uppercase ${
					color != 'white' && 'text-white'
				} text-6xl md:text-6xl 2xl:text-9xl font-black`}
			>
				{name}
			</h1>
			<span
				className={`${
					color != 'white' ? `text-${color}-900` : 'text-gray-300'
				} font-black text-xl md:text-3xl 2xl:text-5xl`}
			>
				{japName}
			</span>
		</>
	);
};

export default PokemonHeader;
