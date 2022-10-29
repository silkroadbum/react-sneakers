
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/img/logo.png" alt="Логотип магазина React Sneakers." width={40} height={40}/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg" alt="Корзина." width={18} height={18}/>
            <span>1205 руб.</span>
          </li>
          <li className="mr-10">
            <img src="/img/heart.svg" alt="Избранное." width={18} height={18}/>
          </li>
          <li>
            <img src="/img/user.svg" alt="Профиль пользователя." width={18} height={18}/>
          </li>
        </ul>
      </header>
      <main className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex">
          <div className="card">
            <img src="/img/sneakers/1.jpg" alt="Кроссовки" width={133} height={112}/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="Плюс." width={11} height={11}/>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/2.jpg" alt="Кроссовки" width={133} height={112}/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="Плюс." width={11} height={11}/>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/3.jpg" alt="Кроссовки" width={133} height={112}/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="Плюс." width={11} height={11}/>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/4.jpg" alt="Кроссовки" width={133} height={112}/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="Плюс." width={11} height={11}/>
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
