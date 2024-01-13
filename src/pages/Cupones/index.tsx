import { Header } from '../../components/Header';

export const Cupones = (): JSX.Element => {
  const handleClick = (): void => {
    // TODO
  };

  return (
    <div id='cupones' className='bg-gray-100 h-full'>
      <Header route={['Inicio', 'Cupones', 'Descargar Cupón']} />

      <article className='p-6 flex flex-col justify-center items-center'>
        <div className='text-sm text-gray-600 font-bold bg-white w-11/12 h-auto p-4 pt-6 pb-0'>
          <label htmlFor='certNumber'>NÚMERO DE CUPÓN</label>
        </div>

        <section className='flex items-center text-sm font-bold text-gray-600 bg-white w-11/12 h-auto gap-3 p-4'>
          <input
            type='text'
            id='certNumber'
            placeholder='XXXX'
            className='w-1/3 rounded-md border-gray-200 shadow-sm sm:text-sm'
          />
          <button
            className='inline-flex items-center gap-2 s rounded-md text-white bg-teal-600 px-6 py-3 hover:bg-teal-800 focus:outline-none focus:ring active:text-indigo-500'
            onClick={handleClick}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={3}
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m4.5 12.75 6 6 9-13.5'
              />
            </svg>

            <span className='text-sm font-normal'>Consultar</span>
          </button>
        </section>
      </article>
    </div>
  );
};
