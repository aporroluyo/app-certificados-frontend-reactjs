import { Layout } from '../../components/Layout';
import { PaginatedTable } from '../../components/PaginatedTable';

const tableHeaders = ['Marca', 'Nombre Tecla', 'Desc. Producto', 'Fecha Vigencia', 'Total Puntos'];

const tableRows = [
  {
    id: 1,
    marca: 'PIZZA HUT',
    nomTecla: 'BONUS CMB FAM-CA I + 100Pts',
    descProducto: '1 Pizza Familiar pepperoni + 4 Panes al ajo + 1 Gaseosa 1 Litro S/39.90 + 100 Ptos bonus',
    fechaVigencia: '31/10/2020',
    totalPuntos: 100
  },
  {
    id: 2,
    marca: 'PIZZA HUT',
    nomTecla: 'BONUS CMB FAM-CA I + 100Pts',
    descProducto: '1 Pizza Familiar pepperoni + 4 Panes al ajo + 1 Gaseosa 1 Litro S/39.90 + 100 Ptos bonus',
    fechaVigencia: '31/10/2020',
    totalPuntos: 100
  }
];

export const Puntos = (): JSX.Element => {
  return (
    <Layout headerRoute={['Inicio', 'Puntos', 'Consulta de Puntos']}>
      <article className="p-6 flex flex-col justify-center items-center">
        <section
          id="head-section"
          className="grid lg:grid-cols-[1fr_2fr_1fr] md:grid-cols-[2fr_1fr] sm:grid-cols-[1fr] justify-items-center gap-6 text-sm font-normal text-gray-600  w-11/12 mt-5 h-auto"
        >
          <div className="bg-white h-full w-full p-5 lg:col-span-1 md:col-span-full">
            <h2 className="font-bold pb-2">Buscar</h2>
            <hr />
            <br />
            <div className="flex flex-col mb-6">
              <label htmlFor="cboDocumento" className="mb-2">
                TIPO DE DOCUMENTO
              </label>
              <select
                name="cboDocumento"
                id="cboDocumento"
                className="h-auto font-normal px-4 py-1 rounded-md"
              >
                <option value="0">Seleccionar</option>
                <option value="1">DNI</option>
                <option value="2">Carné de Extranjería</option>
              </select>
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="" className="mb-2">
                NÚMERO DE DOCUMENTO
              </label>
              <input
                type="text"
                id="certNumber"
                placeholder="Nro. Documento"
                className="rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
            <div className="flex gap-1 justify-between">
              <button className="inline-flex items-center gap-2 s rounded-md text-white bg-teal-600 px-4 py-2 hover:bg-teal-800 focus:outline-none focus:ring active:text-indigo-500">
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

                <span className="text-sm font-normal">Consultar</span>
              </button>
              <button className="inline-flex items-center gap-2 s rounded-md text-white bg-red-500 px-4 py-2 hover:bg-red-700 focus:outline-none focus:ring active:text-indigo-500">
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

                <span className="text-sm font-normal">Limpiar</span>
              </button>
            </div>
          </div>

          <div className="bg-white h-full w-full p-5">
            <h2 className="font-bold pb-2">Datos del Cliente</h2>
            <hr />
            <br />
            <div className="flex flex-col mb-8">
              <p className="mb-2">APELLIDOS Y NOMBRES</p>
              <h3 className="text-lg font-bold">ALEXANDER - PORRO LUYO</h3>
            </div>
            <div className="flex flex-col">
              <p className="mb-2">FECHA DE NACIMIENTO</p>
              <h3 className="text-lg font-bold">01/04/2004</h3>
            </div>
          </div>

          <div className="bg-white h-full w-full p-5">
            <h2 className="font-bold pb-2">Saldo Puntos</h2>
            <hr />
            <br />
            <div className="flex flex-col mb-8">
              <p className="mb-2">TOTAL</p>
              <h3 className="text-lg font-bold">78</h3>
            </div>
            <div className="flex flex-col mb-8">
              <p className="mb-2">AUTORIZADO CANJE</p>
              <h3 className="text-lg font-bold">AUTORIZADO</h3>
            </div>
            <div className="flex flex-col">
              <p className="mb-2">ESTADO TARJETA</p>
              <h3 className="text-lg font-bold">SÍ</h3>
            </div>
          </div>
        </section>

        <section
          id="marca-section"
          className="flex flex-col justify-items-center text-sm font-normal bg-white text-gray-600  w-11/12 mt-5 p-4 h-auto"
        >
          <h2 className="font-bold pb-2">Marca</h2>
          <hr />
          <br />
          <select
            name="cboSocio"
            id="cboSocio"
            className="h-auto font-normal px-4 py-1 rounded-md mb-6"
          >
            <option value="0">Todos</option>
            <option value="1">Burger King</option>
            <option value="2">Pizza Hut</option>
            <option value="3">KFC</option>
            <option value="4">...</option>
          </select>

          <PaginatedTable headers={tableHeaders} rows={tableRows}/>
        </section>
      </article>
    </Layout>
  );
};
