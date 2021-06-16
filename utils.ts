export const getPokemons = async (qty: number, offset: number) => {
	return await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${qty}&offset=${offset}`
	)
		.then((res) => res.json())
		.catch((e) => console.log(e));
};

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

export const getPokemonId = (url: string) => {
	return parseInt(url.split('pokemon/')[1].replace('/', ''));
};
