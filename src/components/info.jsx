import React from 'react';

function Info({title, image, description, fn, buttonTitle}) {

    return (
        <div className="cart-empty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="120px" src={image} alt="Empty" />
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            <button onClick={fn} className="green-button">
                <img src="img/arrow.svg" alt="Arrow" />
                {buttonTitle}
            </button>
        </div>
    );
}

export default Info;