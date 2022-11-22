import { observer } from 'mobx-react-lite';
import { useStores } from '../providers/StoresProvider';
import { itemBasket } from '../types/stores';

function BasketItem(props: { item: itemBasket }) {
  const { item } = props;

  const {
    basketStore: { addBasketItem, removeBasketItem, reduceBasketItemQty },
  } = useStores();

  return (
    <div
      key={item.id}
      className="bg-zinc-500 m-1 p-1 rounded-md flex sm:flex-row flex-col justify-between text-center"
    >
      <div className="flex sm:flex-grow justify-around gap-2">
        <div>
          <p>Nome:</p>
          <p>{item.vehicle.name}</p>
        </div>
        <div className="border-l pl-1 border-gray-200 sm:border-0">
          <p>Créditos:</p>
          <p>{item.vehicle.cost_in_credits}</p>
        </div>
        <div className="border-l pl-1 border-gray-200 sm:border-0">
          <p>Quantidade:</p>
          <p>{item.qty}</p>
        </div>
        <div className="border-l pl-1 border-gray-200 sm:border-0">
          <p>Total:</p>
          <p>{item.qty * item.vehicle.cost_in_credits}</p>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <button
          className="bg-red-600 rounded-l-md px-1"
          onClick={() => {
            reduceBasketItemQty(item.id);
          }}
        >
          <img
            height="20px"
            width="20px"
            className="invert"
            src="/src/assets/icons/minus_icon.svg"
            alt=""
          />
        </button>
        <button
          className="bg-emerald-600 rounded-r-md px-1"
          onClick={() => addBasketItem(item.vehicle)}
        >
          <img
            height="20px"
            width="20px"
            className="invert"
            src="/src/assets/icons/plus_icon.svg"
            alt=""
          />
        </button>
        <button className="p-2" onClick={() => removeBasketItem(item.id)}>
          <img
            height="18px"
            width="18px"
            className="invert"
            src="/src/assets/icons/trashbin_icon.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default observer(BasketItem);
