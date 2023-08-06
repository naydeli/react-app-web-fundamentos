import { MdMenu, MdOutlinePersonPin, } from 'react-icons/md';
import {HiPencil, HiOutlineCog8Tooth, HiArrowSmallRight,HiLockClosed,HiMiniArrowLeftOnRectangle} from "react-icons/hi2";
import { useState } from 'react';

type Props = {
  mostrar: number;
  setMostrar: any;
  useLogout: any;
};

export const Header = (props: Props) => {
  const { setMostrar } = props;
  const [menuVisible, setMenuVisible] = useState(false);
  const { useLogout } = props;

  return (
    <header className="flex items-center justify-between p-2 text-lg text-center text-white uppercase border-b-8 shadow-lg select-none bg-slate-700 border-rose-400 shadow-slate-400">
      <span
        onClick={() => setMostrar(1)}
        className="hover:cursor-pointer hover:text-rose-400 active:text-yellow-400"
      >
        <MdMenu size={40} />
      </span>

      <div>
        <h1 className="font-bold">
          Reservaciones de eventos y compras en línea
        </h1>
        <p>Comercial "La económica"</p>
      </div>

      
      <div className="relative">
        <span onClick={() => setMenuVisible(!menuVisible)}>
          <MdOutlinePersonPin size={40}
          className="hover:cursor-pointer hover:text-rose-400 active:text-yellow-400" />
        </span>

        
        {menuVisible && (
          <div className="absolute top-full right-0 mt-4 bg-white rounded">
            <ul>
              <li className="px-5 py-2 hover:bg-rose-200 bg-gray-200 text-black font-medium">  <HiPencil/> Ver perfil</li>
              <hr />
              <li className="px-4 py-2 hover:bg-rose-200 bg-gray-300 text-black font-medium"> <HiLockClosed/> Cambiar contraseña</li>
              <hr />
              <li className="px-4 py-2 hover:bg-rose-200 bg-gray-200 text-black font-medium"> <HiOutlineCog8Tooth/>  Ajustes</li>
              <hr />
              <li className="px-4 py-2 hover:bg-rose-200 bg-gray-300 text-black font-medium" onClick={() => useLogout()}>
                <HiMiniArrowLeftOnRectangle/>
                Cerrar sesión
                < HiArrowSmallRight/>
               
              </li>
            </ul>
          </div>
        )}
      </div>

      
    </header>
  );
};