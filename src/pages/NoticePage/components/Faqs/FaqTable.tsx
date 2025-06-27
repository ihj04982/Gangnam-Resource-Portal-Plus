import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import type { NoticeTableProps } from '../../../../models/notice';
import FaqTableRowWrap from './FaqTableRowWrap';

const FaqTable = ({ data }: NoticeTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="center">제목</TableCell>
            <TableCell align="center">등록일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <FaqTableRowWrap index={row.index} date={row.date} contents={row.contents} title={row.title} id={row.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FaqTable;
