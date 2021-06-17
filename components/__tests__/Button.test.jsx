import { shallow } from 'enzyme';
import Link from 'next/link';
import Button from '../UI/Button';

describe('Button', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Button />);
		expect(wrapper.containsMatchingElement(<Button />));
	});

	it('renders as <Link> by default', () => {
		const wrapper = shallow(<Button title='Button' />);
		expect(
			wrapper.containsMatchingElement(
				<Link>
					<a>Button</a>
				</Link>
			)
		).toEqual(true);
	});

	it('renders as <button> if props.action', () => {
		const mockFn = jest.fn();
		const wrapper = shallow(<Button action={mockFn} title='Button' />);
		expect(
			wrapper.containsMatchingElement(
				<button onClick={mockFn}>Button</button>
			)
		).toEqual(true);
	});
});
