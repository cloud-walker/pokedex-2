import { filterByQuery, filterToCatch, getPokemonId } from '../../utils';

const pokemonList = [
	{
		name: 'bulbasaur',
		url: 'https://pokeapi.co/api/v2/pokemon/1',
	},
	{
		name: 'ivysaur',
		url: 'https://pokeapi.co/api/v2/pokemon/2/',
	},
	{
		name: 'venusaur',
		url: 'https://pokeapi.co/api/v2/pokemon/3/',
	},
];

const owned = [
	{
		name: 'bulbasaur',
		url: 'https://pokeapi.co/api/v2/pokemon/1',
	},
];

test('filter pokemon by query', () => {
	expect(filterByQuery(pokemonList, owned[0].name)).toStrictEqual(owned);
});

test('filter caught pokemon', () => {
	expect(filterToCatch(pokemonList, owned)).toStrictEqual([
		{
			name: 'ivysaur',
			url: 'https://pokeapi.co/api/v2/pokemon/2/',
		},
		{
			name: 'venusaur',
			url: 'https://pokeapi.co/api/v2/pokemon/3/',
		},
	]);
});

test('parse pokemon id from url', () => {
	expect(getPokemonId('https://pokeapi.co/api/v2/pokemon/2/')).toBe(2);
});
