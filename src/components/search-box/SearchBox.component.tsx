import './search-box.styles.css';

interface ISearchBoxProps {
    className: string;
    placeholder?: string;
}

interface ISearchBoxProps {
    onChangeHandler: (a: string) => void;
}

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (a: string) => void;
};

// the main difference between interface and type is union is applicable in types
type netherlandsAddress = {
    street: string;
    postcode: number;
};

type germanAddress = {
    street: string;
    postcode: string;
};

type europeAddress = netherlandsAddress | germanAddress;

const SearchBox = ({ className, placeholder, onChangeHandler }: ISearchBoxProps) => (
    <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
);

export default SearchBox;
