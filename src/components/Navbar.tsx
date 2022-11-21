import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStores } from '../providers/StoresProvider';

const Navbar = observer(() => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const {
    basketStore: { basketItems, showBasket, setShowBasket },
  } = useStores();

  return (
    <div className="flex justify-around p-3 bg-black text-gray-200 shadow-md sticky top-0 z-50 w-full">
      <div>
        <Link to="/" className="font-starwars text-4xl shadow-xl text-yellow-300 brightness-200">
          STAR WARS
        </Link>
      </div>
      <div className="flex">
        <Link className="pr-1 flex" to="/basket">
          <img
            height="25px"
            width="25px"
            className="invert"
            src="/src/assets/icons/basket_icon.svg"
            alt=""
          />
          <span className="">
            <small>{basketItems.length}</small>
          </span>
        </Link>
      </div>
    </div>
  );
});

export default Navbar;
