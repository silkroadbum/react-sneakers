import Card from "../components/Card";

function Favorites({items, onAddToFavorite}) {
    return (
        <main className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Мои закладки</h1>
            </div>

            <div className="d-flex flex-wrap">
                {items
                    .map((item, index) => 
                    <Card
                        key={item.title+index}
                        favorited={true}
                        onFavorite={onAddToFavorite}
                        {...item}
                    />
                )}
            </div>
        </main>
    );
}

export default Favorites;