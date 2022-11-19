import { Outlet } from 'react-router-dom';
import Basket from '../components/Basket';
import Navbar from '../components/Navbar';

function PageLayout() {
  return (
    <div className="min-h-screen w-full bg-orange-100">
      <Navbar />
      <div className="relative flex">
        <Outlet />
        <Basket />
      </div>
    </div>
  );
}

export default PageLayout;
