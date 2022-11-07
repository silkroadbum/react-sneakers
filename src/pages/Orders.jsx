import React from "react";
import Card from "../components/Card";
import axios from "axios";

function Orders() {
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            try {
                const {data} = await axios.get('https://635e802bed25a0b5fe46f9d9.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch (error) {
                alert('Ошибка при запросе заказов');
                console.error(error);
            }
            
        }
        fetchData();
       
    }, []);

    return (
        <main className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Мои покупки</h1>
            </div>

            <div className="d-flex flex-wrap">
                {(isLoading ? [...Array(8)]: orders)
                    .map((item, index) => 
                    <Card 
                        key={index}
                        loading={isLoading}
                        {...item}
                    />
                )}
            </div>
        </main>
    );
}

export default Orders;