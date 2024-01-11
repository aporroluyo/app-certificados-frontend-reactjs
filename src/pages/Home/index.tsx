import { styled } from '@mui/material/styles';

import { Header } from '../../components/Header';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const HomePage = (): JSX.Element => {
  const rows = [
    {
      name: 'PIZZA HUT',
      total: 107,
    },
    {
      name: 'BURGER KING',
      total: 10,
    },
    {
      name: 'KFC',
      total: 1,
    },
  ];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#7e7e7e',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <div id='home' className='bg-gray-100 h-full'>
      <Header route={['Alexander Porro', 'Administrador']} />

      <article className='p-6 flex flex-col justify-center items-center'>
        <section className='flex justify-between items-center text-sm font-bold text-gray-600 bg-white w-11/12 h-12 mt-5 p-4'>
          <p>CERTIFICADO Y CUPONES CONSUMIDOS</p>
          <p>ENERO/2024</p>
        </section>

        <section className='flex justify-center items-center text-sm font-medium text-stone-800 bg-white w-11/12 h-auto p-4'>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size='small'
              aria-label='a dense table'
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Socios</StyledTableCell>
                  <StyledTableCell align='right'>Totales</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell component='th' scope='row'>
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align='right'>{row.total}</StyledTableCell>
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
