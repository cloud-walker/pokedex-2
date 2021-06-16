import { FC, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import PokemonCard from '../components/PokemonCard';
import BackButton from '../components/UI/BackButton/BackButton';

const Collection: FC = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const data = JSON.parse(localStorage.getItem('collection') || '{}');

			if (!data) {
				localStorage.setItem('collection', '[]');
			} else {
				setList(data);
			}
		}
	}, []);

	return (
		<Layout>
			<div className='h-full py-12'>
				<div className='px-8 md:px-20 block'>
					<BackButton />
					<h1 className='text-5xl max-w-xl font-bold my-4'>
						My collection
					</h1>
				</div>

				<div className='px-8 md:px-20 py-4 '>
					{list.length ? (
						<div className='flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-1 lg:-mx-2 xl:-mx-1'>
							{list.map((pokemon: any, i: number) => (
								<div
									key={i}
									className='my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-1 md:px-1 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/4'
								>
									<PokemonCard
										name={pokemon.name}
										id={pokemon.id}
										type={pokemon.type}
										color={pokemon.color}
										owned
									/>
								</div>
							))}
						</div>
					) : (
						<div className='block'>
							<p>Collection is empty</p>
						</div>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default Collection;
