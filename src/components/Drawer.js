function Drawer({onClose}) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between">
                    Корзина
                    <img onClick={onClose} className="remove-btn cu-p" src="/img/btn-remove.svg" alt="Close." width={32} height={32} />
                </h2>

                <div className="items">
                    <div className="cart-item d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="card-item-img"></div>

                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove." width={32} height={32} />
                    </div>
                </div>

                <div className="cart-total-block">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className="green-button">
                        Оформить заказ
                        <img src="/img/arrow.svg" alt="Arrow." />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;