export const getPokemons = async (qty, offset) => {
	return await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${qty}&offset=${offset}`
	)
		.then((res) => res.json())
		.catch((e) => console.log(e));
};

export const filterByQuery = (data, query) => {
	return data.filter((entry) =>
		Object.values(entry).some(
			(val) => typeof val === 'string' && val.includes(query)
		)
	);
};

export const filterToCatch = (data, owned) => {
	const filtered = data.filter(
		(el) => !owned.some((item) => item.name === el.name)
	);

	return filtered;
};

export const getPokemonId = (url) => {
	return url.split('pokemon/')[1].replace('/', '');
};
