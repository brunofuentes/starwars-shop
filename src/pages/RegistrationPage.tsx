import PreviousPageBtn from '../components/PreviousPageBtn';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div className="text-gray-200 mx-auto w-full min-h-full">
      <div className="bg-zinc-700 p-1 sm:p-3 rounded-b-md opacity-90">
        <PreviousPageBtn text="Minha Compra" to="/basket" />
        <h2 className="font-starwars text-2xl text-center py-5">Preencha Seus dados</h2>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
