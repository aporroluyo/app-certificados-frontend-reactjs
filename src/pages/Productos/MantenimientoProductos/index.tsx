import { NavLink } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { PaginatedTable } from '../../../components/PaginatedTable';

const tableHeaders = [
  'Marca',
  'Nombre Tecla',
  'Descripción Producto',
  'PLU',
  'Familia',
  'Sub-Familia',
  'Fecha Vigencia',
  'Puntos',
  'Estado'
];

const rows = [
  {
    id: 1,
    marca: 'KFC',
    nombreTecla: 'MEGA BONUS 39.9-CA',
    descProducto:
      '9 piezas de pollo + 1 papa familiar + 1 gaseosa Lt. a S/. 39.90 + 100 Ptos bonus',
    PLUCod: '00000006000035',
    familia: 'BONUS',
    subFamilia: 'CANJE(PTOS. + SOLES)',
    fechaVigencia: '31/10/2020',
    puntos: 100,
    estado: 'Activo'
  },
  {
    id: 2,
    marca: 'PIZZA HUT',
    nombreTecla: 'BONUS CMB FAM-CA I + 100Pts',
    descProducto:
      '1 Pizza Familiar pepperoni + 4 Panes al ajo + 1 Gaseosa 1 Litro S/39.90 + 100 Ptos bonus',
    PLUCod: '00000007535005',
    familia: 'BONUS',
    subFamilia: 'CANJE(PTOS. + SOLES)',
    fechaVigencia: '31/10/2020',
    puntos: 100,
    estado: 'Activo'
  },
  {
    id: 3,
    marca: 'CHILIS',
    nombreTecla: 'BONUS MOLTEN',
    descProducto: 'Molten a S/ 12.90 + 80 Ptos bonus	',
    PLUCod: '00000000003408',
    familia: 'BONUS',
    subFamilia: 'CANJE(PTOS. + SOLES)',
    fechaVigencia: '31/10/2020',
    puntos: 80,
    estado: 'Activo'
  },
  {
    id: 4,
    marca: 'PIZZA HUT',
    nombreTecla: 'BONUS CMB FAM-CA I + 100Pts',
    descProducto:
      '1 Pizza Familiar pepperoni + 4 Panes al ajo + 1 Gaseosa 1 Litro S/39.90 + 100 Ptos bonus',
    PLUCod: '00000007535005',
    familia: 'BONUS',
    subFamilia: 'CANJE(PTOS. + SOLES)',
    fechaVigencia: '31/10/2020',
    puntos: 100,
    estado: 'Activo'
  },
  {
    id: 5,
    marca: 'CHILIS',
    nombreTecla: 'BONUS MOLTEN',
    descProducto: 'Molten a S/ 12.90 + 80 Ptos bonus	',
    PLUCod: '00000000003408',
    familia: 'BONUS',
    subFamilia: 'CANJE(PTOS. + SOLES)',
    fechaVigencia: '31/10/2020',
    puntos: 80,
    estado: 'Activo'
  },
  {
    id: 6,
    marca: 'PIZZA HUT',
    nombreTecla: 'BONUS CMB FAM-CA I + 100Pts',
    descProducto:
      '1 Pizza Familiar pepperoni + 4 Panes al ajo + 1 Gaseosa 1 Litro S/39.90 + 100 Ptos bonus',
    PLUCod: '00000007535005',
    familia: 'BONUS',
    subFamilia: 'CANJE(PTOS. + SOLES)',
    fechaVigencia: '31/10/2020',
    puntos: 100,
    estado: 'Activo'
  },
  {
    id: 7,
    marca: 'CHILIS',
    nombreTecla: 'BONUS MOLTEN',
    descProducto: 'Molten a S/ 12.90 + 80 Ptos bonus	',
    PLUCod: '00000000003408',
    familia: 'BONUS',
    subFamilia: 'CANJE(PTOS. + SOLES)',
    fechaVigencia: '31/10/2020',
    puntos: 70,
    estado: 'Activo'
  }
];

export const MantenimientoProductos = (): JSX.Element => {
  return (
    <Layout headerRoute={['Inicio', 'Productos', 'Mantenimiento']}>
      <article className="p-6 flex flex-col items-center justify-center">
        <section className="text-sm text-gray-600 font-bold bg-white w-11/12 h-auto px-4 py-6 pb-0 flex justify-end gap-10">
          <NavLink to='/productos/nuevo' className="inline-flex items-center gap-2 s rounded-md text-white bg-teal-600 px-6 py-3 hover:bg-teal-800 focus:outline-none focus:ring active:text-indigo-500">
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <span className="text-sm font-normal">Nuevo Producto</span>
          </NavLink>
        </section>

        <section className="text-sm text-gray-600 font-bold bg-white w-11/12 h-auto px-4 py-6 flex gap-10">
          <PaginatedTable headers={tableHeaders} rows={rows} />
        </section>
      </article>
    </Layout>
  );
};
