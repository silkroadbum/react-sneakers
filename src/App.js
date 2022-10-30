import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  
  
  React.useEffect(() => {
    fetch('https://635e802bed25a0b5fe46f9d9.mockapi.io/items')
    .then(res => {
      return res.json();
    }).then(json => {
      setItems(json);
    });
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={()=> setCartOpened(false)}/>}
      <Header onClickCart={()=> setCartOpened(true)}/>

      <main className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Поиск."/>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map(({title, price, imageUrl}) => 
            <Card
              title={title}
              price={price}
              imageUrl={imageUrl}
            />
          )}
        </div>

      </main>
    </div>
  );
}

export default App;
