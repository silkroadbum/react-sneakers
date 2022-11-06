import React from "react";
import axios from "axios";
import { Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  
  React.useEffect(() => {
    axios.get('https://635e802bed25a0b5fe46f9d9.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://635e802bed25a0b5fe46f9d9.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
    axios.get('https://635e802bed25a0b5fe46f9d9.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const onAddToCart = (item) => {
    axios.post('https://635e802bed25a0b5fe46f9d9.mockapi.io/cart', item);
    setCartItems(prev => [...prev, item]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://635e802bed25a0b5fe46f9d9.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://635e802bed25a0b5fe46f9d9.mockapi.io/favorites/${obj.id}`);
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

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={()=> setCartOpened(false)} onRemove={onRemoveItem}/>}
      <Header onClickCart={()=> setCartOpened(true)}/>
      <Routes>
        <Route path="/" element={
          <Home
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchValue={onChangeSearchValue}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
          />
        }/>
        <Route path="/favorites" element={
          <Favorites 
            items={favorites}
            onAddToFavorite={onAddToFavorite}
          />
        }/>
      </Routes>
    </div>
  );
}

export default App;
