function Drawer({onClose, onRemove, items = []}) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between">
                    Корзина
                    <img onClick={onClose} className="remove-btn cu-p" src="/img/btn-remove.svg" alt="Close." width={32} height={32} />
                </h2>
                {
                    items.length > 0 ? (
                        <div>
                            <div className="items">
                                {items.map((obj, index) => (
                                    <div key={obj.title+index} className="cart-item d-flex align-center mb-20">
                                        <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="card-item-img"></div>

                                        <div className="mr-20 flex">
                                            <p className="mb-5">{obj.title}</p>
                                            <b>{obj.price} руб.</b>
                                        </div>
                                        <img onClick={()=> onRemove(obj.id)} className="remove-btn" src="/img/btn-remove.svg" alt="Remove." width={32} height={32} />
                                    </div>
                                ))}
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
                    ) : (
                        <div className="cart-empty d-flex align-center justify-center flex-column flex">
                            <img className="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
                            <h2>Корзина пустая</h2>
                            <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <button onClick={onClose} className="green-button">
                            <img src="/img/arrow.svg" alt="Arrow" />
                            Вернуться назад
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Drawer;