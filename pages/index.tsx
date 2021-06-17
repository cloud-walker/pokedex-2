import { GetServerSideProps } from 'next';
import { FC, useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PokemonCard from '../components/PokemonCard';
import TabButton from '../components/UI/TabButton';
import SearchBar from '../components/SearchBar';
import {
	filterByQuery,
	filterToCatch,
	getPokemonId,
	getPokemons,
	checkIfCaught,
} from '../utils';

interface DataType {
	data: Array<Object>;
}

const Home: FC<DataType> = ({ data }: DataType) => {
	const [pokemonList, setPokemonList] = useState(data);
	const [collection, setCollection] = useState([]);
	const [filterMode, setFilterMode] = useState('all');
	const [offset, setOffset] = useState(100);
	const [query, setQuery] = useState('');

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const current = JSON.parse(
				localStorage.getItem('collection') || '{}'
			);

			if (current) {
				setCollection(current);
			} else {
				localStorage.setItem('collection', JSON.stringify([]));
			}
		}

		// Update filtered array
		setPokemonList(filterByQuery(data, query));
	}, [query, filterMode]);

	const loadPokemon = async () => {
		const { results } = await getPokemons(100, offset);

		// Add new pokemons to existing array
		setPokemonList(pokemonList.concat(results));

		// Increase offset
		setOffset(offset + 100);
	};

	return (
		<Layout>
			<div className='h-full flex justify-start items-center pt-20 pb-8'>
				<div className='px-8 md:px-20 block'>
					<h1 className='text-5xl max-w-xl font-bold mb-4'>
						What pokemon are you looking for?
					</h1>

					<SearchBar
						onChange={setQuery}
						placeholder='Search pokemon...'
					/>
				</div>
			</div>
			<div className='px-8 md:px-20 py-4'>
				<div className='w-full inline-flex py-4'>
					<TabButton
						title='All'
						action={() => setFilterMode('all')}
						selected={filterMode === 'all'}
					/>
					<TabButton
						title='Caught'
						action={() => setFilterMode('caught')}
						selected={filterMode === 'caught'}
					/>
					<TabButton
						title='To catch'
						action={() => setFilterMode('toCatch')}
						selected={filterMode === 'toCatch'}
					/>
				</div>
				<div className='flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-1 lg:-mx-2 xl:-mx-1'>
					{filterMode === 'all' &&
						pokemonList.map((pokemon: any, i: number) => {
							return (
								<div
									key={i}
									className='my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-1 md:px-1 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/4'
								>
									<PokemonCard
										name={pokemon.name}
										caught={checkIfCaught(
											pokemon.name,
											collection
										)}
										id={getPokemonId(pokemon.url)}
									/>
								</div>
							);
						})}

					{filterMode === 'caught' &&
						collection
							.sort((a: any, b: any) => a.id - b.id)
							.map((pokemon: any, i: number) => (
								<div
									key={i}
									className='my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-1 md:px-1 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/4'
								>
									<PokemonCard
										name={pokemon.name}
										caught
										id={pokemon.id}
									/>
								</div>
							))}

					{filterMode === 'toCatch' &&
						filterToCatch(pokemonList, collection).map(
							(pokemon: any, i: number) => (
								<div
									key={i}
									className='my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-1 md:px-1 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/4'
								>
									<PokemonCard
										name={pokemon.name}
										id={getPokemonId(pokemon.url)}
									/>
								</div>
							)
						)}
				</div>

				{filterMode === 'all' && (
					<button
						className='text-center text-white bg-red-500 my-4 px-8 py-5 rounded-md text-xs font-bold hover:opacity-80 uppercase w-full focus:outline-none'
						onClick={() => loadPokemon()}
					>
						load pokemons
					</button>
				)}
			</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const { results } = await getPokemons(100, 0);

	return {
		props: {
			data: results,
		},
	};
};

export default Home;
