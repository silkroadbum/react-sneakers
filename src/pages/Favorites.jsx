import React from "react";
import Card from "../components/Card";
import AppContext from "../context";
import Info from "../components/info";

function Favorites() {
    const {favorites, onAddToFavorite, toHomePage} = React.useContext(AppContext);

    return (
        <main className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Мои закладки</h1>
            </div>

            <div className="d-flex flex-wrap">
                {favorites.length > 0 ? (
                    favorites.map((item, index) => 
                        <Card
                            key={item.title+index}
                            favorited={true}
                            onFavorite={onAddToFavorite}
                            {...item}
                        />
                    )
                ) : (
                    <Info 
                        title={'Закладок нет :('}
                        description={'Вы ничего не добавляли в закладки'} 
                        image={'img/smile1.png'}
                        buttonTitle={'Вернуться на главную'}
                        fn = {() => toHomePage()}
                    />
                )
                }
            </div>
        </main>
    );
}

export default Favorites;