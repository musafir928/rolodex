import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/SearchBox.component';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchString: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) =>
                this.setState(
                    () => ({ monsters: users })
                    // () => console.log(this.state.monsters)
                )
            );
    }

    onSearchChange = (event) => {
        this.setState((p) => (p.searchString = event.target.value.toLowerCase()));
    };

    render() {
        const { monsters, searchString } = this.state;
        const { onSearchChange } = this;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchString)
        );
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
    }
}

export default App;
