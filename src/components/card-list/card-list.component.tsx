import { Monster } from '../../App';
import Card from '../Card/Card.component';
import './card-list.styles.css';

type CardListProps = {
    filteredMonsters: Monster[];
};

const CardList = ({ filteredMonsters }: CardListProps) => (
    <div className='card-list'>
        {filteredMonsters.map(({ name, email, id }) => (
            <Card name={name} email={email} key={id} id={id} />
        ))}
    </div>
);
export default CardList;
