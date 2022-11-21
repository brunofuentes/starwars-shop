import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function PageLayout() {
  return (
    <div className="min-h-screen w-full font-mono bg-[url('/src/assets/bg-starwars.png')] bg-contain">
      <Navbar />
      <div className="mx-auto lg:max-w-4xl flex justify-center flex-col ">
        <Outlet />
      </div>
    </div>
  );
}

export default PageLayout;
