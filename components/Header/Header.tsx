import { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => (
	<div className='w-full inline-flex justify-between py-8 px-8 md:px-20 bg-white'>
		<Link href='/'>
			<a className='tracking-widest text-red-500'>POKEDEX</a>
		</Link>
		<Link href='/collection'>
			<a className='tracking-widest text-black-500 font-bold'>
				My collection
			</a>
		</Link>
	</div>
);

export default Header;
