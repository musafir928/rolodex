import './card.styles.css';

const Card = ({ name, email, id }) => (
    <div className='card-container'>
        <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
);

export default Card;
