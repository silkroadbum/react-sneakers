import React from "react";
import axios from "axios";
import { Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Favorites from "./pages/Favorites";
import AppContext from "./context";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  
  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://635e802bed25a0b5fe46f9d9.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://635e802bed25a0b5fe46f9d9.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://635e802bed25a0b5fe46f9d9.mockapi.io/items');
      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
    
  }, []);

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://635e802bed25a0b5fe46f9d9.mockapi.io/cart/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        axios.post('https://635e802bed25a0b5fe46f9d9.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, obj]);
      }
    } catch (error) {
      
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://635e802bed25a0b5fe46f9d9.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://635e802bed25a0b5fe46f9d9.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const {data} = await axios.post('https://635e802bed25a0b5fe46f9d9.mockapi.io/favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное!');
    }
    
  }

  const onChangeSearchValue = (evt) => {
    setSearchValue(evt.target.value);
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, setCartOpened, setCartItems, onAddToFavorite, onAddToCart}}>
      <div className="wrapper clear">
        {cartOpened && <Drawer items={cartItems} onClose={()=> setCartOpened(false)} onRemove={onRemoveItem}/>}
        <Header onClickCart={()=> setCartOpened(true)}/>
        <Routes>
          <Route path="/" element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchValue={onChangeSearchValue}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          }/>
          <Route path="/favorites" element={
            <Favorites />
          }/>
          <Route path="/orders" element={
            <Orders/>
          }/>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
