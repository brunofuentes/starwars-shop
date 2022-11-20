import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function PageLayout() {
  return (
    <div className="min-h-screen w-full bg-zinc-900 font-mono">
      <Navbar />
      <div className="mx-auto lg:max-w-4xl flex justify-center flex-col">
        <div className="relative flex">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
