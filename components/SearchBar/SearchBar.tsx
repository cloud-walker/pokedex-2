import { FC } from 'react';

interface SearchBarProps {
	onChange: (_: string) => void;
	placeholder: string;
}

const SearchBar: FC<SearchBarProps> = ({
	onChange,
	placeholder,
}: SearchBarProps) => {
	return (
		<input
			className='p-4 w-full rounded-md border-none bg-red-100 outline-none'
			onChange={(e) => onChange(e.currentTarget.value)}
			placeholder={placeholder}
		/>
	);
};

export default SearchBar;
