import Card from '../Card/Card.component';
import './card-list.styles.css';

const CardList = ({ filteredMonsters }) => (
    <div className='card-list'>
        {filteredMonsters.map(({ name, email, id }) => (
            <Card name={name} email={email} key={id} id={id} />
        ))}
    </div>
);
export default CardList;
