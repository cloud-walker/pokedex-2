import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

it('renders correctly', () => {
	const { queryByPlaceholderText } = render(
		<SearchBar placeholder='Search pokemon...' />
	);

	expect(queryByPlaceholderText('Search pokemon...')).toBeTruthy();
});

describe('Input value', () => {
	it('updates on change', () => {
		const { queryByPlaceholderText } = render(
			<SearchBar onChange={jest.fn()} placeholder='Search pokemon...' />
		);

		const searchInput = queryByPlaceholderText('Search pokemon...');

		fireEvent.change(searchInput, { target: { value: 'Charizard' } });

		expect(searchInput.value).toBe('Charizard');
	});
});
