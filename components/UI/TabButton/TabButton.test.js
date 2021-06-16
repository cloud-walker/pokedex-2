import { render, fireEvent } from '@testing-library/react';
import TabButton from './TabButton';

it('renders correctly', () => {
	const { queryByText } = render(
		<TabButton title='test' action={jest.fn()} selected={false} />
	);

	expect(queryByText('test')).toBeTruthy();
});

describe('Selected value', () => {
	it('updates on click', () => {
		const { queryByText } = render(
			<TabButton title='test' action={jest.fn()} selected={false} />
		);

		const tabButton = queryByText('test');

		fireEvent(tabButton, new MouseEvent('click'));
	});
});
