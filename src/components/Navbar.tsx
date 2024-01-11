import { useState } from 'react';
import { NavbarItem } from '../components/NavbarItem';

export const Navbar = (): JSX.Element => {
  const navItems = [
    {
      name: 'Bonus',
      url: '#',
      isFilled: true,
    },
    {
      name: 'Inicio',
      url: '#',
      isFilled: false,
    },
    {
      name: 'Certificado',
      url: '#',
      isFilled: false,
    },
    {
      name: 'Reporte',
      url: '#',
      isFilled: false,
      dropdownOptions: {
        items: [
          {
            name: 'Reporte Certificado',
            url: '#',
          },
          {
            name: 'Reporte de Canjes',
            url: '#',
          },
        ],
      },
    },
    {
      name: 'Campaña Cross',
      url: '#',
      isFilled: false,
    },
    {
      name: 'Big Promo - Primax',
      url: '#',
      isFilled: false,
    },
    {
      name: 'Consulta de Puntos',
      url: '#',
      isFilled: false,
    },
    {
      name: 'Mantenimiento Producto',
      url: '#',
      isFilled: false,
    },
    {
      name: 'Cuenta',
      url: '#',
      isFilled: false,
      dropdownOptions: {
        items: [
          {
            name: 'Cambiar contraseña',
            url: '#',
          },
          {
            name: 'Cerrar sesión',
            url: '#',
          },
        ],
        direction: 2,
      },
    },
  ];

  const [showMenu, setShowMenu] = useState(true);

  const handleClick = (): void => {
    setShowMenu(!showMenu);
  };

  const logout = (): void => {
    // TODO: logout
    location.href = '/login';
  };

  return (
    <nav className='bg-white flex lg:items-center lg:justify-between flex-wrap h-auto lg:h-14'>
      <aside className='navbar-btn__container w-full'>
        <div className='lg:hidden bg-teal-600'>
          <button
            className='navbar-burger flex items-center px-3 py-2'
            onClick={handleClick}
          >
            <svg
              className='fill-current h-9 w-7 text-white'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
      </aside>

      <div
        id='navbar__container'
        className={'h-full w-full flex-grow lg:flex items-center'}
      >
        <div
          className={`h-full w-full text-sm lg:flex lg:flex-grow lg:justify-between transition-all ease-in-out duration-300 ${
            showMenu ? 'opacity-100 h-auto' : 'opacity-0 h-0'
          }`}
        >
          {navItems.map((item, index) => (
            <NavbarItem
              key={index}
              name={item.name}
              url={item.url}
              isFilled={item.isFilled}
              {...(item.dropdownOptions !== null
                ? { dropdownOptions: item.dropdownOptions }
                : {})}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};
