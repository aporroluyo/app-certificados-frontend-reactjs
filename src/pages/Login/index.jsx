export function LoginPage() {
  return (
    <div
      id="login"
      className="w-full h-full flex items-center justify-center bg-gray-100"
    >
      <article className="login__container flex flex-row justify-center h-screen w-2/3 h-auto">
        <section className="login__left flex justify-center items-center w-1/2 max-w-96 px-3">
          <h1 className="text-3xl text-stone-400 font-thin">
            BIENVENIDO AL SISTEMA DE SOCIOS
          </h1>
        </section>

        <aside className="login__right flex flex-col gap-5 justify-center w-1/2 max-w-96 py-4 px-7 bg-white rounded-lg shadow-lg">
          <p className="text-center font-medium text-gray-500">
            Ingrese su cuenta
          </p>

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
            />
          </div>

          <a
            class="inline-block mb-16 text-center rounded border border-teal-600 bg-teal-600 w-full px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 duration-250 ease-in-out transform focus:outline-none focus:ring"
            href="/index"
          >
            Ingresar
          </a>
        </aside>
      </article>
    </div>
  );
}
