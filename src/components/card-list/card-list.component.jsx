import { Component } from 'react';
import Card from '../Card/Card.component';
import './card-list.styles.css';

class CardList extends Component {
    render() {
        return (
            <div className='card-list'>
                {this.props.filteredMonsters.map(({ name, email, id }) => (
                    <Card name={name} email={email} key={id} id={id} />
                ))}
            </div>
        );
    }
}
export default CardList;
