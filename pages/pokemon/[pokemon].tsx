import { GetServerSideProps } from 'next';
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Button from '../../components/UI/Button';
import PokemonHeader from '../../components/PokemonHeader';
import StatsTable from '../../components/StatsTable';
import BackButton from '../../components/UI/BackButton';

interface PokemonProps {
	name: string;
	japName: string;
	color: string;
	flavor_text: string;
	id: number;
	artwork: string;
	type: string;
	stats: Array<any>;
}

const Pokemon: FC<PokemonProps> = ({
	name,
	japName,
	color,
	flavor_text,
	id,
	artwork,
	type,
	stats,
}: PokemonProps) => {
	const [owned, setOwned] = useState(false);

	let pokemonSchema = {
		name,
		japName,
		color,
		flavor_text,
		id,
		artwork,
		type,
		stats,
	};

	useEffect(() => {
		// Check if client-side
		if (typeof window !== 'undefined') {
			const current = JSON.parse(
				localStorage.getItem('collection') || '[]'
			);

			if (current) {
				// Check if pokemon is already in collection
				current.some(
					(pokemon: any) => pokemon.name === pokemonSchema.name
				) && setOwned(true);
			}
		}
	}, [pokemonSchema.name]);

	const addToCollection = () => {
		const current = JSON.parse(localStorage.getItem('collection') || '[]');

		if (current) {
			// Add current pokemon to array and store in localstorage
			current.push(pokemonSchema);
			localStorage.setItem('collection', JSON.stringify(current));
		} else {
			// Create localstorage item if collection doesn't exists
			localStorage.setItem('collection', JSON.stringify([pokemonSchema]));
		}

		setOwned(true);
	};

	return (
		<Layout>
			<div className={`bg-${color}-500 block md:flex`}>
				<div className='pt-20 md:py-20 block h-full px-8 md:px-20 relative'>
					<div className='absolute top-2'>
						<BackButton />
					</div>
					<PokemonHeader
						name={name}
						japName={japName}
						type={type}
						color={color}
						id={id}
						owned={owned}
					/>
					<br />
					<Image
						alt={`${name} artwork`}
						src={artwork}
						className='w-64 2xl:w-96 mt-8'
						width={100}
						height={100}
						layout='responsive'
					/>
					<p className={`text-black`}>{flavor_text}</p>
					<div className='flex flex-col'>
						{owned ? (
							<div
								className={`w-full md:w-96 text-center text-${color}-500 bg-white mt-4 px-8 py-5 rounded-md text-xs font-bold opacity-50 uppercase`}
							>
								caught
							</div>
						) : (
							<Button
								title='Catch'
								color={color}
								action={() => addToCollection()}
								secondary
							/>
						)}
						<Button
							title='View collection'
							color={color}
							href='/collection'
						/>
					</div>
				</div>
				<StatsTable stats={stats} color={color} />
			</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async ({
	params,
}: any) => {
	const { pokemon } = params;

	const basicData = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${pokemon}`
	).then((res) => res.json());

	const addData = await fetch(
		`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
	).then((res) => res.json());

	const { name, id, height, sprites, types, stats } = basicData;
	const artwork = sprites.other['official-artwork'].front_default;
	const type = types[0].type.name;
	const japName = addData.names[9].name;
	const color = addData.color.name;

	// Filter the first english description
	const { flavor_text } = addData.flavor_text_entries.find((text: any) => {
		return text.language.name === 'en';
	});

	return {
		props: {
			name,
			japName,
			color,
			flavor_text,
			id,
			height,
			artwork,
			type,
			stats,
		},
	};
};

export default Pokemon;
