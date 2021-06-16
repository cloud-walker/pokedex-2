import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import backArrow from '../../../public/back.png';

const BackButton: FC = () => {
	const router = useRouter();

	return (
		<button
			className='uppercase text-sm font-bold my-4 focus:outline-none inline-flex items-center'
			onClick={() => router.back()}
		>
			<Image alt='back arrow' src={backArrow} width={20} height={20} />{' '}
			<span className='ml-2'>back</span>
		</button>
	);
};

export default BackButton;
