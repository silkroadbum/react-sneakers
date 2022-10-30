import styles from './Card.module.scss';

function Card({title, price, imageUrl, onClick}) {
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked heart."/>
            </div>
            <img src={imageUrl} alt="Кроссовки" width={133} height={112}/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
            </div>
            <button className="button" onClick={onClick}>
                <img src="/img/plus.svg" alt="Плюс." width={11} height={11}/>
            </button>
            </div>
        </div>
    );
}

export default Card;