import React from 'react';
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader";
import AppContext from '../../context';

function Card({id, title, price, imageUrl, onPlus, onFavorite, favorited = false, added = false, loading = false }) {
    const {isItemAdded} = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    console.log(title, isItemAdded(id));

    const onClickPlus = () => {
        onPlus({id, title, price, imageUrl});
    }

    const onClickFavorite = () => {
        onFavorite({title, price, imageUrl, id});
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            {
                loading ?
                <ContentLoader 
                    speed={2}
                    width={155}
                    height={240}
                    viewBox="0 0 150 187"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
                    <rect x="0" y="100" rx="5" ry="5" width="150" height="15" /> 
                    <rect x="0" y="120" rx="5" ry="5" width="100" height="15" /> 
                    <rect x="0" y="150" rx="5" ry="5" width="80" height="25" /> 
                    <rect x="115" y="145" rx="10" ry="10" width="32" height="32" />
                </ContentLoader> :
                <>
                    <div className={styles.favorite} onClick={onClickFavorite}>
                        <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked heart."/>
                    </div>
                    <img src={imageUrl} alt="Кроссовки" width='100%' height={135}/>
                    <h5>{title}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>{price} руб.</b>
                    </div>
                    <img className={styles.plus} onClick={onClickPlus} src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Плюс."/>
                    </div>
                </>
            }   
        </div>
        
    );
}

export default Card;