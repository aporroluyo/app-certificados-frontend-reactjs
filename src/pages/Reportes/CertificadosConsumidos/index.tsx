import '../../../styles/date-picker.css';

import { type ChangeEvent, useState } from 'react';

import { Header } from '../../../components/Header';
import { PaginatedTable } from '../../../components/PaginatedTable';

import dayjs, { type Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const headers = [
  'Nro. Certificado',
  'Nombres',
  'Fecha Consulta',
  'Hora Consulta',
  'Fecha Consumo',
  'Hora Consumo',
  'Socio',
  'Cod. Producto',
  'Desc. Producto'
];

const rows = [
  {
    id: 1,
    numCertificado: 981549,
    cargo: 'SUPERVISOR DELOSI',
    fechaConsulta: '30/05/2019',
    horaConsulta: '18:43:14',
    fechaConsumo: '30/05/2019',
    horaConsumo: '18:43:23',
    socio: 'KFC',
    codProducto: 6000018,
    desProducto: 'BQTE BONUS FAM V2'
  },
  {
    id: 2,
    numCertificado: 981951,
    cargo: 'OPERADOR DELOSI',
    fechaConsulta: '30/08/2019',
    horaConsulta: '19:57:14',
    fechaConsumo: '30/08/2019',
    horaConsumo: '19:57:20',
    socio: 'PIZZA HUT',
    codProducto: 7540001,
    desProducto: 'BONUS PARA 2 XP'
  },
  {
    id: 3,
    numCertificado: 985972,
    cargo: 'OPERADOR DELOSI',
    fechaConsulta: '22/09/2019',
    horaConsulta: '18:26:09',
    fechaConsumo: '22/09/2019',
    horaConsumo: '18:26:26',
    socio: 'PIZZA HUT',
    codProducto: 7540002,
    desProducto: 'BONUS PQT FAM XP'
  }
];

export const CertificadosConsumidos = (): JSX.Element => {
  // hacer un custom hook
  const [partner, setPartner] = useState('0');
  const [startDate, setStartDate] = useState<Dayjs | null>();
  const [endDate, setEndDate] = useState<Dayjs | null>();

  const [setshowTable, setShowTable] = useState(false);

  const handlePartnerChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectedPartner = event.target.value;
    setPartner(selectedPartner);
  };

  const verifyData = (): void => {
    if (
      partner !== undefined &&
      startDate !== undefined &&
      endDate !== undefined
    ) {
      setShowTable(true);
    }
  };

  return (
    <div className="bg-gray-100 h-full">
      <Header
        route={['Inicio', 'Reportes', 'Descargar Certificados Consumidos']}
      />

      <article className="p-6 flex flex-col items-center justify-center">
        <section className="text-sm text-gray-600 font-bold bg-white w-11/12 h-auto px-4 py-6 flex gap-10 max-md:flex-col">
          <div className="flex flex-col w-52">
            <label htmlFor="cboSocio" className="mb-2">
              SOCIO
            </label>
            <select
              name="cboSocio"
              id="cboSocio"
              className="h-auto font-normal px-4 py-1 rounded-md"
              onChange={handlePartnerChange}
              value={partner}
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

            <DatePicker
              slotProps={{ textField: { size: 'small' } }}
              value={startDate}
              onChange={(newStartDate) => {
                setStartDate(newStartDate);
              }}
            />
          </div>

          <div className="flex flex-col w-52">
            <label htmlFor="cboFechaFin" className="mb-2">
              FECHA FIN
            </label>

            <DatePicker
              slotProps={{ textField: { size: 'small' } }}
              value={endDate}
              onChange={(newEndDate) => {
                setEndDate(newEndDate);
              }}
            />
          </div>

          <div className="flex items-end">
            <button
              className="inline-flex items-center gap-2 s rounded-md text-white bg-teal-600 px-6 py-3 hover:bg-teal-800 focus:outline-none focus:ring active:text-indigo-500"
              onClick={verifyData}
            >
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

        {setshowTable && (
          <section className="text-sm text-gray-600 font-bold bg-white w-11/12 h-auto px-4 py-6 flex gap-10">
            <PaginatedTable headers={headers} rows={rows} />
          </section>
        )}
      </article>
    </div>
  );
};
