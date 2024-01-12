import '../../../utils/date-picker.css';

import { Header } from '../../../components/Header';

import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  {
    id: 981549,
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
    id: 981951,
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
    id: 985972,
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#e4e4e4',
    color: '#4b5563',
    fontWeight: 'bold'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover
  },
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

export const CertificadosConsumidos = (): JSX.Element => {
  return (
    <div className="bg-gray-100 h-full">
      <Header
        route={['Inicio', 'Reportes', 'Descargar Certificados Consumidos']}
      />

      <article className="p-6 flex flex-col items-center justify-center">
        <section className="text-sm text-gray-600 font-bold bg-white w-11/12 h-auto p-4 pt-6 pb-0 flex gap-10">
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
            <button className="inline-flex items-center gap-2 s rounded-md text-white lg:bg-teal-600 px-6 py-3 hover:bg-teal-800 focus:outline-none focus:ring active:text-indigo-500">
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
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nro. Certificado</StyledTableCell>
                  <StyledTableCell>Nombres</StyledTableCell>
                  <StyledTableCell>Fecha Consulta</StyledTableCell>
                  <StyledTableCell>Hora Consulta</StyledTableCell>
                  <StyledTableCell>Fecha Consumo</StyledTableCell>
                  <StyledTableCell>Hora Consumo</StyledTableCell>
                  <StyledTableCell>Socio</StyledTableCell>
                  <StyledTableCell>Cod. Producto</StyledTableCell>
                  <StyledTableCell>Desc. Producto</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell>{row.cargo}</StyledTableCell>
                    <StyledTableCell>{row.fechaConsulta}</StyledTableCell>
                    <StyledTableCell>{row.horaConsulta}</StyledTableCell>
                    <StyledTableCell>{row.fechaConsumo}</StyledTableCell>
                    <StyledTableCell>{row.horaConsumo}</StyledTableCell>
                    <StyledTableCell>{row.socio}</StyledTableCell>
                    <StyledTableCell>{row.codProducto}</StyledTableCell>
                    <StyledTableCell>{row.desProducto}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </article>
    </div>
  );
};
