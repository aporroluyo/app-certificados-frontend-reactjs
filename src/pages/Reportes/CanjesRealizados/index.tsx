import '../../../styles/date-picker.css';

import { Header } from '../../../components/Header';
import { PaginatedTable } from '../../../components/PaginatedTable';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const headers = ['Marca', 'DNI', 'Nombres', 'Puntos Canjeados', 'Fecha Canje', 'Hora Canje'];

const rows = [
  {
    id: 1,
    marca: 'KFC',
    numDocumento: '41833635',
    nombres: 'ANDIA REYNA JONATTAN -',
    puntosCanjeados: 100,
    fechaCanje: '28/05/2020',
    horaCanje: '16:58:45'
  },
  {
    id: 2,
    marca: 'PINKBERRY',
    numDocumento: '41833600',
    nombres: 'SAMANIEGO GUEVARA FREDDIE DAVI',
    puntosCanjeados: '30/05/2019',
    fechaCanje: '28/05/2020',
    horaCanje: '16:58:45'
  },
  {
    id: 3,
    marca: 'PINKBERRY',
    numDocumento: '41833600',
    nombres: 'SAMANIEGO GUEVARA FREDDIE DAVI',
    puntosCanjeados: '30/05/2019',
    fechaCanje: '28/05/2020',
    horaCanje: '16:58:45'
  },
  {
    id: 4,
    marca: 'PINKBERRY',
    numDocumento: '75390691',
    nombres: 'ALEXANDER PORRO LUYO',
    puntosCanjeados: '30/05/2019',
    fechaCanje: '28/05/2020',
    horaCanje: '16:58:45'
  }
];

export const CanjesRealizados = (): JSX.Element => {
  return (
    <div className="bg-gray-100 h-full">
      <Header
        route={['Inicio', 'Reportes', 'Canjes Realizados por Contact Center']}
      />

      <article className="p-6 flex flex-col items-center justify-center">
        <section className="text-sm text-gray-600 font-bold bg-white w-11/12 h-auto p-4 pt-6 pb-0 flex gap-10 max-md:flex-col">
          <div className="flex flex-col w-52">
            <label htmlFor="cboSocio" className="mb-2">
              SOCIO
            </label>
            <select
              name="cboSocio"
              id="cboSocio"
              className="h-auto font-normal px-4 py-1 rounded-md"
            >
              <option value="0">Todos</option>
              <option value="1">Burger King</option>
              <option value="2">Pizza Hut</option>
              <option value="3">KFC</option>
              <option value="4">...</option>
            </select>
          </div>

          <div className="flex flex-col w-52">
            <label htmlFor="cboFechaInicio" className="mb-2">
              FECHA INICIO
            </label>

            <DatePicker slotProps={{ textField: { size: 'small' } }} />
          </div>

          <div className="flex flex-col w-52">
            <label htmlFor="cboFechaFin" className="mb-2">
              FECHA FIN
            </label>

            <DatePicker slotProps={{ textField: { size: 'small' } }} />
          </div>

          <div className="flex items-end">
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

              <span className="text-sm font-normal">Mostrar</span>
            </button>
          </div>
        </section>

        <section className="text-sm text-gray-600 font-bold bg-white w-11/12 h-auto p-4 pt-10 pb-0 flex gap-10">
          <PaginatedTable headers={headers} rows={rows}/>
        </section>
      </article>
    </div>
  );
};
