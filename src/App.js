import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

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
          {Array.from({length: 4}, ()=> <Card/>)}
        </div>

      </main>
    </div>
  );
}

export default App;
