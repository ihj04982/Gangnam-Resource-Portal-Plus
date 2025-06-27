import { TableCell, TableRow } from '@mui/material';
import type { FaqItem } from '../../../../models/notice';
import { useNavigate } from 'react-router';

const FaqTableRowWrap = ({ id, index, title, date }: FaqItem) => {
  const nav = useNavigate();
  return (
    <TableRow
      onClick={() => {
        nav(`/notice/faq/${id}`);
      }}
      key={id}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
        '&:hover': {
          bgcolor: 'secondary.main',
          color: 'text.primary',
        },
      }}
    >
      <TableCell component="th" scope="row">
        {index}
      </TableCell>
      <TableCell sx={{ wordBreak: 'keep-all' }}>{title}</TableCell>
      <TableCell>{date}</TableCell>
    </TableRow>
  );
};

export default FaqTableRowWrap;
