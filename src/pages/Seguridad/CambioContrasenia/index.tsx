import { Layout } from '../../../components/Layout';

export const CambioContrasenia = (): JSX.Element => {
  return (
    <Layout headerRoute={['Inicio', 'Seguridad', 'Cambiar Contraseña']}>
      <article className="p-6 flex flex-col justify-center items-center">
        <form className="flex flex-col w-11/12 h-auto bg-white text-sm font-bold text-gray-600 p-4 gap-8">
          <section className="flex items-center gap-3">
            <label htmlFor="newPassword">Nueva Contraseña:</label>

            <input
              type="password"
              id="newPassword"
              className="w-1/3 rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </section>
          <section className="flex items-center gap-3">
            <label htmlFor="newPassword_two">Repita Contraseña:</label>

            <input
              type="password"
              id="newPassword_two"
              className="w-1/3 rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </section>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 s rounded-md text-white bg-teal-600 px-6 py-3 hover:bg-teal-800 focus:outline-none focus:ring active:text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>

              <span className="text-sm font-normal">Guardar</span>
            </button>
          </div>
        </form>
      </article>
    </Layout>
  );
};
