// API

export const getPokemons = async (qty: number, offset: number) => {
	return await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${qty}&offset=${offset}`
	)
		.then((res) => res.json())
		.catch((e) => console.log(e));
};

export const getPokemonId = (url: string) => {
	return parseInt(url.split('pokemon/')[1].replace('/', ''));
};

// Filtering

export const filterByQuery = (data: any, query: string) => {
	return data.filter((entry: Array<any>) =>
		Object.values(entry).some(
			(val) => typeof val === 'string' && val.includes(query)
		)
	);
};

export const filterToCatch = (data: Array<any>, owned: Array<any>) => {
	const filtered = data.filter(
		(el) => !owned.some((item) => item.name === el.name)
	);

	return filtered;
};

export const checkIfCaught = (name: string, collection: Array<any>) => {
	if (collection.length > 0) {
		return collection.some((pokemon: any) => pokemon.name === name);
	} else return false;
};

// Formatting

export const capitalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
