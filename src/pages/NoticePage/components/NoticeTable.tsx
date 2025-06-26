import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
export interface FaqItem {
  index: number;
  date: string;
  title: string;
  contents: string[];
}
interface NoticeTableProps {
  data: FaqItem[];
}

const NoticeTable = ({ data }: NoticeTableProps) => {
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
            <TableRow key={row.index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.index}
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NoticeTable;
