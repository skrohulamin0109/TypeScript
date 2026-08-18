import "./App.css";
import { Card } from "./components/Card.tsx";
import { ChaiCard } from "./components/ChaiCard.tsx";
import { ChaiList } from "./components/ChaiList.tsx";
import { Counter } from "./components/Counter.tsx";
import { OrderForm } from "./components/OrderForm.tsx";
import type { Chai } from "./types.ts";

const menu: Chai[] = [
  {id: 1, name: 'Masala', price: 30},
  {id: 2, name: 'Ginger', price: 50},
  {id: 3, name: 'Lemon', price: 60}
]

function App() {
    return (
        <>
            <div>
                <h1>Vite + React</h1>
                <ChaiCard name={"HeadPhones"} price={5000} />
                <ChaiCard name={"MobilePhones"} price={90000} />
            </div>
            <div>
                <Counter />
            </div>
            <div>
              <ChaiList items={menu}/>
            </div>
            <div>
              <OrderForm
              onSubmit={(order) => {
                console.log('placed', order.name, order.cups)
              }}
              />
            </div>

            <div>
              <Card title="Chai aur typescript" footer={<button>Order Now</button>} />
            </div>
        </>
    );
}

export default App;
