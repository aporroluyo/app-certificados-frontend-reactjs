import { useState, type FormEvent } from 'react';
import { useAuth } from '../../auth/AuthProvider';
import { Navigate } from 'react-router-dom';

export const Login = (): JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();

  if (auth.isAuthenticated) return <Navigate to="/inicio" />;

  const handleLogin = (e: FormEvent<HTMLFormElement>): void => {
    if (username !== '') {
      auth.saveUser(username);
      <Navigate to='/inicio'/>;
    }
  };

  return (
    <div
      id="login"
      className="w-full h-full flex items-center justify-center bg-gray-100"
    >
      <article className="login__container flex flex-row justify-center h-auto w-2/3">
        <section className="login__left flex justify-center items-center w-1/2 max-w-96 px-3">
          <h1 className="text-3xl text-stone-400 font-thin">
            BIENVENIDO AL SISTEMA DE SOCIOS
          </h1>
        </section>

        <aside className="login__right w-1/2 max-w-96 py-4 px-7 bg-white rounded-lg shadow-lg">
          <p className="text-center font-medium text-gray- mb-6">
            Ingrese su cuenta
          </p>

          <form className='flex flex-col gap-5' onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="userTxt"
                className="block text-sm font-bold text-gray-600"
              >
                Usuario:
              </label>
              <input
                type="text"
                id="userTxt"
                placeholder="Usuario"
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm sm:text-sm text-gray-500"
                value={username}
                onChange={({ target }) => {
                  setUsername(target.value);
                }}
              />
            </div>

            <div>
              <label
                htmlFor="passTxt"
                className="block text-sm font-bold text-gray-600"
              >
                Contraseña:
              </label>
              <input
                type="password"
                id="passTxt"
                placeholder="Contraseña"
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm sm:text-sm text-gray-500"
                value={password}
                onChange={({ target }) => {
                  setPassword(target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="inline-block mb-16 text-center rounded border border-teal-600 bg-teal-600 w-full px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 duration-250 ease-in-out transform focus:outline-none focus:ring"
            >
              Ingresar
            </button>
          </form>
        </aside>
      </article>
    </div>
  );
};
