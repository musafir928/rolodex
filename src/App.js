import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
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
                    () => ({ monsters: users }),
                    () => console.log(this.state.monsters)
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
                <input
                    type='text'
                    className='search-box'
                    placeholder='search monsters'
                    onChange={onSearchChange}
                />
                {filteredMonsters.map((monster) => {
                    return (
                        <div key={monster.id}>
                            <h1>{monster.name}</h1>
                        </div>
                    );
                })}
                <CardList />
            </div>
        );
    }
}

export default App;
