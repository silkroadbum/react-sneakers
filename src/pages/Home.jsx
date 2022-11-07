import Card from "../components/Card";

function Home({ items, searchValue, setSearchValue, onChangeSearchValue, onAddToCart, onAddToFavorite, isLoading}) {

    const renderItems = () => {
        const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
        return (isLoading ? [...Array(12)] : filteredItems)
                .map((item, index) => (
                    <Card
                        key={index}
                        onPlus={(item) => onAddToCart(item)}
                        onFavorite={(item) => onAddToFavorite(item)}
                        loading={isLoading}
                        {...item}
                    />
                ));
    }

    return (
        <main className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block">
                    <img src="/img/search.svg" alt="Поиск."/>
                    {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Clear." width={18} height={18} />}
                    <input onChange={onChangeSearchValue} value={searchValue} placeholder="Поиск..."/>
                </div>
            </div>

            <div className="d-flex flex-wrap">
                {renderItems()}
            </div>
        </main>
    );
}

export default Home;