import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/SearchBox.component';
import './App.css';

const App = () => {
    const [monsters, setMonsters] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    const onSearchChange = (event) => {
        setSearchString(event.target.value.toLowerCase());
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setMonsters(users));
    }, []);

    useEffect(() => {
        setFilteredMonsters(
            monsters.filter((monster) => monster.name.toLowerCase().includes(searchString))
        );
    }, [searchString, monsters]);

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
