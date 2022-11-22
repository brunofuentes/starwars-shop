import { itemBasket } from '../types/stores';

function OrderItem(props: { item: itemBasket }) {
  const { item } = props;

  return (
    <div
      key={item.id}
      className="bg-zinc-500 m-1 p-1 rounded-md flex sm:flex-row flex-col justify-between text-center"
    >
      <div className="flex flex-grow justify-around sm:grid sm:grid-cols-4 w-full gap-2">
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
    </div>
  );
}

export default OrderItem;
