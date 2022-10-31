import React from 'react';
import styles from './Card.module.scss';

function Card({title, price, imageUrl, onPlus}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickPlus = () => {
        onPlus({title, price, imageUrl});
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Unliked heart."/>
            </div>
            <img src={imageUrl} alt="Кроссовки" width={133} height={112}/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
            </div>
            <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Плюс."/>
            </div>
        </div>
    );
}

export default Card;