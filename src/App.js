import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

const arr = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.jpg'},
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imageUrl: '/img/sneakers/2.jpg'},
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: '/img/sneakers/3.jpg'},
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: '/img/sneakers/4.jpg'}
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>

      <main className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Поиск."/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        

        <div className="d-flex">
          {arr.map(({title, price, imageUrl}) => 
            <Card
              title={title}
              price={price}
              imageUrl={imageUrl}
              onClick={() => console.log(price)}
            />
          )}
        </div>

      </main>
    </div>
  );
}

export default App;
