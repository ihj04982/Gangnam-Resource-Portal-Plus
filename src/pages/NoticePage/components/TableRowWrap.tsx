import { TableCell, TableRow } from '@mui/material';
import type { FaqItem } from '../../../models/notice';
import { useNavigate } from 'react-router';

const TableRowWrap = ({ id, index, title, date }: FaqItem) => {
  const nav = useNavigate();
  return (
    <TableRow
      onClick={() => {
        nav(`/notice/faq/${id}`);
      }}
      key={id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {index}
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{date}</TableCell>
    </TableRow>
  );
};

export default TableRowWrap;
