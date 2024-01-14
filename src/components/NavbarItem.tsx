import { NavLink } from 'react-router-dom';

import '../styles/nav-links.css';

interface DropdownItem {
  name: string
  url: string
  func?: () => void
}

interface DropdownOptions {
  items: DropdownItem[]
  direction?: number
}

interface Props {
  name: string
  url: string
  isFilled?: boolean
  dropdownOptions?: DropdownOptions
}

export const NavbarItem = ({
  name,
  url,
  isFilled,
  dropdownOptions
}: Props): JSX.Element => {
  const direction =
    dropdownOptions?.direction !== undefined ? dropdownOptions.direction : 1;

  return (
    <div className="group block lg:inline-block relative font-medium">
      <NavLink
        to={url}
        className={`block lg:inline-block text-gray-900 h-14 px-6
        ${
          isFilled === true
            ? 'text-lg text-teal-600 font-bold lg:hover:text-white lg:font-normal lg:text-white lg:hover:bg-teal-700 lg:bg-teal-600 lg:focus:text-white filled-link'
            : ''
        }
        transition duration-150 ease-in-out hover:text-teal-600 focus:text-teal-600 p-1`}
      >
        <div className="flex items-center justify-center h-full gap-1 text-center">
          {name}{' '}
          {dropdownOptions !== undefined &&
            dropdownOptions.items.length > 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
          )}
        </div>
      </NavLink>
      {/* Dropdown */}
      {dropdownOptions !== undefined && dropdownOptions.items.length > 0 && (
        <ul
          className={`bg-white border rounded-sm lg:absolute ${
            direction === 1 ? 'left-3' : direction === 2 ? 'right-4' : ''
          } lg:hidden border-none group-hover:block transition duration-150 ease-in-out origin-top min-w-48`}
        >
          {dropdownOptions.items.map((item, index) => (
            <li key={index} className="rounded-sm lg:hover:bg-gray-100">
              <NavLink
                to={item.url}
                className="flex w-full h-full px-3 py-4 lg:py-2 justify-center lg:justify-start transition duration-150 ease-in-out hover:text-teal-600"
                onClick={() => item.func?.()}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
