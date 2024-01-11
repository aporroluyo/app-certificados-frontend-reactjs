interface DropdownItem {
  name: string
  url: string
}

interface Props {
  name: string
  url: string
  isFilled?: boolean
  dropdownOptions?: {
    items: DropdownItem[]
    direction?: number
  }
}

export const NavbarItem = ({
  name,
  url,
  isFilled,
  dropdownOptions
}: Props): JSX.Element => {
  const direction = dropdownOptions?.direction !== undefined ? dropdownOptions.direction : 1;

  return (
    <div className="group block lg:inline-block relative font-medium">
      <a
        href={url}
        className={`block lg:inline-block text-gray-900 h-14 px-6
        ${
          isFilled === true
            ? 'lg:bg-teal-600 text-lg lg:text-white lg:hover:bg-teal-700 lg:hover:text-white bg-transparent text-teal-600 hover:text-teal-800'
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
      </a>
      {/* Dropdown */}
      {dropdownOptions !== undefined && dropdownOptions.items.length > 0 && (
        <ul
          className={`bg-white border rounded-sm lg:absolute ${
            direction === 1
              ? 'left-3'
              : direction === 2
              ? 'right-4'
              : ''
          } lg:hidden border-none group-hover:block transition duration-150 ease-in-out origin-top min-w-48`}
        >
          {dropdownOptions.items.map((item, index) => (
            <li key={index} className="rounded-sm lg:hover:bg-gray-100">
              <a
                href={item.url}
                className="flex w-full h-full px-3 py-4 lg:py-2 justify-center lg:justify-start transition duration-150 ease-in-out hover:text-teal-600"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
