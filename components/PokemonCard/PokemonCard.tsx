import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
	name: string;
	id: number;
	type?: string;
	color?: string;
	owned?: boolean;
}

const PokemonCard: FC<CardProps> = ({
	name,
	id,
	type,
	color,
	owned,
}: CardProps) => {
	return (
		<Link href={`/pokemon/${name}`}>
			<a>
				<div
					className={`rounded-md w-full inline-flex justify-between bg-${color}-500 p-4 bg-gray-200 hover:opacity-80`}
				>
					<div className='inline-flex'>
						<div className='rounded-full w-20 mr-4'>
							<Image
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
								layout='responsive'
								width={30}
								height={30}
							/>
						</div>
						<div className='block'>
							<p
								className={`text-lg uppercase font-bold text-${color}-200`}
							>
								{name}
							</p>
							<span>#{id}</span>
							<p className='text-xs uppercase'>{type}</p>
						</div>
					</div>
					<div>
						{owned && <img src='/pokeball.png' className='w-10' />}
					</div>
				</div>
			</a>
		</Link>
	);
};

export default PokemonCard;
