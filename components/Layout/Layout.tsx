import { FC, useEffect } from 'react';
import Header from '../Header';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	useEffect(() => {
		// Check client-side
		if (typeof window !== 'undefined') {
			// Create localstorage item collection if it doens't exists
			if (localStorage.getItem('collection') === null) {
				localStorage.setItem('collection', '[]');
			}
		}
	}, []);

	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default Layout;
