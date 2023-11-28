import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import './cards.css';

function Cards(props) {
  return (
    <Card className='face'>
      <Card.Img className='face' variant="top" src={props.src}/>
      <Card.Body className='body'>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Cards.PropTypes={
  src: PropTypes.string.isRequired,
  Title: PropTypes.string
}

export default Cards;