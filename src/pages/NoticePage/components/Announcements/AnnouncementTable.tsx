import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import type { AnnouncementsTableProps } from '../../../../models/notice';
import AnnouncementTableRow from './AnnouncementTableRow';

const AnnouncementTable = ({ data }: AnnouncementsTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="center">제목</TableCell>
            <TableCell align="center" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
              등록일
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <AnnouncementTableRow index={row.index} date={row.date} url={row.url} title={row.title} id={row.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default AnnouncementTable;
