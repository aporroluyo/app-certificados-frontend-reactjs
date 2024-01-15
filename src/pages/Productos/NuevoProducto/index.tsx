import { useState, type FormEvent } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { type Dayjs } from 'dayjs';

import { Layout } from '../../../components/Layout';

export const NuevoProducto = (): JSX.Element => {
  const [points, setPoints] = useState<number>();
  const [codPLU, setCodPLU] = useState('');
  const [partner, setPartner] = useState('0');
  const [startDate, setStartDate] = useState<Dayjs | null>();
  const [endDate, setEndDate] = useState<Dayjs | null>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (
      partner !== '' &&
      codPLU !== '' &&
      startDate !== undefined &&
      endDate !== undefined &&
      points !== undefined
    ) {
      console.log(partner, 'cod:' + codPLU, startDate, endDate, points);
    }
  };

  return (
    <Layout headerRoute={['Inicio', 'Productos', 'Nuevo']}>
      <article className="p-6 flex flex-col items-center justify-center">
        <section className="w-11/12 h-auto bg-white text-sm text-gray-600 font-bold">
          <form
            onSubmit={handleSubmit}
            className="px-4 py-6 gap-8 flex flex-col sm:w-[28rem]"
          >
            <div className="flex flex-col">
              <label htmlFor="cboSocio" className="mb-2">
                Socio
              </label>
              <select
                name="cboSocio"
                id="cboSocio"
                className="h-auto font-normal px-4 py-1 rounded-md"
                onChange={({ target }) => {
                  setPartner(target.value);
                }}
                value={partner}
              >
                <option value="0">Todos</option>
                <option value="1">Burger King</option>
                <option value="2">Pizza Hut</option>
                <option value="3">KFC</option>
                <option value="4">...</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="cboSocio" className="mb-2">
                Código PLU
              </label>
              <input
                type="text"
                id="certNumber"
                placeholder=""
                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                value={codPLU}
                onChange={({ target }) => {
                  setCodPLU(target.value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cboSocio" className="mb-2">
                Fecha de inicio y fin
              </label>
              <div className="flex gap-2">
                <DatePicker
                  slotProps={{ textField: { size: 'small' } }}
                  value={startDate}
                  onChange={(newStartDate) => {
                    setStartDate(newStartDate);
                  }}
                />
                <DatePicker
                  slotProps={{ textField: { size: 'small' } }}
                  value={endDate}
                  onChange={(newEndDate) => {
                    setEndDate(newEndDate);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="cboSocio" className="mb-2">
                Puntos a canjear
              </label>
              <input
                type="text"
                id="puntos"
                placeholder=""
                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                value={points}
                onChange={({ target }) => {
                  setPoints(parseInt(target.value));
                }}
              />
            </div>

            <div className="flex flex-col">
              <button
                type="submit"
                className="inline-block mb-16 text-center rounded border border-teal-600 bg-teal-600 w-full px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 duration-250 ease-in-out transform focus:outline-none focus:ring"
              >
                Registrar
              </button>
            </div>
          </form>
        </section>
      </article>
    </Layout>
  );
};
