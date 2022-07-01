import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/SearchBox.component';

import { getData } from './utils/data.utils';
import './App.css';

export type Monster = {
    id: string;
    name: string;
    email: string;
};

const App = () => {
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [searchString, setSearchString] = useState('');
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
            setMonsters(users);
        };
        fetchUsers();
    }, []);

    useEffect(() => {
        setFilteredMonsters(
            monsters.filter((monster) => monster.name.toLowerCase().includes(searchString))
        );
    }, [searchString, monsters]);

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchString(event.target.value.toLowerCase());
    };
    return (
        <div className='App'>
            <h1 className='app-title'>Monsters Rolodex</h1>
            <SearchBox
                onChangeHandler={onSearchChange}
                placeholder='search a monster'
                className='monster-search-box'
            />
            <CardList filteredMonsters={filteredMonsters} />
        </div>
    );
};

export default App;
