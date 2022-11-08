import React from 'react';
import { Link } from 'react-router-dom';

function Info({title, image, description, fn, buttonTitle, link}) {

    return (
        <div className="cart-empty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="120px" src={image} alt="Empty" />
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            <Link to={link}>
                <button onClick={fn} className="green-button">
                    <img src="img/arrow.svg" alt="Arrow" />
                    {buttonTitle}
                </button>
            </Link>
        </div>
    );
}

export default Info;