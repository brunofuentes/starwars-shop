import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import BasketItem from '../components/BasketItem';
import PreviousPageBtn from '../components/PreviousPageBtn';
import { useStores } from '../providers/StoresProvider';

function BasketPage() {
  const navigate = useNavigate();
  const {
    basketStore: { basketItems, basketTotalCost },
  } = useStores();

  const {
    orderStore: { order, createOrder },
  } = useStores();

  function handleClick() {
    if (basketItems.length > 0) createOrder();
    if (order.orderId) navigate('/registration');
  }

  return (
    <div className="text-gray-200 mx-auto w-full min-h-full">
      <div className="bg-zinc-700 p-1 sm:p-3 rounded-b-md opacity-90">
        <PreviousPageBtn text="Voltar para Loja" to="/" />
        <div className="font-starwars p-2">
          <h1>Suas compras</h1>
        </div>
        {basketItems.map((item) => (
          <BasketItem key={item.id} item={item} />
        ))}
        <div className="text-right mt-4 m-1">
          <p className="font-starwars">Soma: {basketTotalCost()}</p>
          <button
            onClick={handleClick}
            disabled={basketItems.length === 0}
            className="disabled:opacity-25 disabled:hover:bg-yellow-300 mt-4 bg-yellow-300 rounded drop-shadow-xl hover:bg-yellow-500 transition ease-in-out duration-300 px-4 py-1 text-zinc-700 font-starwars"
          >
            Comprar items
          </button>
        </div>
      </div>
    </div>
  );
}

export default observer(BasketPage);
