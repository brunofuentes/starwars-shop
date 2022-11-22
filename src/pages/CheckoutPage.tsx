import { observer } from 'mobx-react-lite';
import OrderItem from '../components/OrderItem';
import PaymentForm from '../components/PaymentForm';
import PreviousPageBtn from '../components/PreviousPageBtn';
import { useStores } from '../providers/StoresProvider';

function CheckoutPage() {
  const {
    orderStore: { order },
  } = useStores();

  return (
    <div className="text-gray-200 mx-auto w-full min-h-full mb-8">
      <div className="bg-zinc-700 p-1 sm:p-3 rounded-b-md opacity-90">
        <PreviousPageBtn text="Meu Cadastro" to="/registration" />
        <h2 className="font-starwars text-2xl text-center py-5">Seu pedido</h2>
        <div>
          <h3 className="font-starwars text-yellow-300 brightness-200 px-2 my-4">
            Resumo do pedido
          </h3>
          <div>
            {order.basketItems.map((item) => (
              <OrderItem key={item.id} item={item} />
            ))}
            <div className="text-right mt-4 m-1">
              <p className="text-xs">*Prazo de entrega: 7 dias úteis a contar do pagamento</p>
              <p className="font-starwars">Soma: {order.orderPrice}</p>
            </div>
          </div>
          <div>
            <PaymentForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(CheckoutPage);
