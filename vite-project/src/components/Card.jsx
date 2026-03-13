import react from 'react';

function Card(props) {

    return (<div className="card">
        <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">{props.text}</p>
        </div>
    </div>)
}

Card.defaultProps = {
    title: 'Hi user!',
    text: 'How are you?'
}

export default Card;