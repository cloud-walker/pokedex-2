import { FC, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import Image from 'next/image';
import PokemonCard from '../components/PokemonCard';
import BackButton from '../components/UI/BackButton/BackButton';
import Togepi from '../public/placeholder.png';
import { findPokemonIndexById } from '../utils';

const Collection: FC = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const data = JSON.parse(localStorage.getItem('collection') || '{}');

			if (!data) {
				localStorage.setItem('collection', '{}');
			} else {
				setList(data);
			}
		}
	}, []);

	const resetCollection = () => {
		localStorage.setItem('collection', '[]');
		setList([]);
	};

	const removePokemonById = (id: number) => {
		const collection = JSON.parse(
			localStorage.getItem('collection') || '{}'
		);

		const index = findPokemonIndexById(id, collection);

		collection.splice(index, 1);
		localStorage.setItem('collection', JSON.stringify(collection));

		// Update collection
		setList(collection);
	};

	return (
		<Layout>
			<Meta
				title='My collection | Pokedex - PokeAPI v2'
				desc='This is your pokemon collection, all the data is fetched from PokeAPI'
				image='/preview.png'
				canonical='https://pokedex-alpha-two.vercel.app/collection'
			/>
			<div className='h-full py-12'>
				<div className='px-8 md:px-20 block'>
					<BackButton />
					<br />

					<h1 className='text-5xl max-w-xl font-bold my-4 mr-8'>
						My collection
					</h1>
					{list.length > 0 && (
						<button
							className='text-xs uppercase text-red-500 font-bold focus:outline-none'
							onClick={() => resetCollection()}
						>
							Clear collection
						</button>
					)}
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
										caught
										withRemove={() =>
											removePokemonById(pokemon.id)
										}
									/>
								</div>
							))}
						</div>
					) : (
						<div>
							<p className='mb-8'>
								You didn't catch any pokemon yet
							</p>
							<Image
								alt='togepi crying placeholder'
								src={Togepi}
								width='436'
								height='337'
							/>
						</div>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default Collection;
