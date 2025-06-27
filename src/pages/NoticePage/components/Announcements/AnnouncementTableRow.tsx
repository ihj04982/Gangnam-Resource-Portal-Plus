import { TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router';
import type { AnnouncementsItem } from '../../../../models/notice';

const AnnouncementTableRow = ({ id, index, title, date }: AnnouncementsItem) => {
  const nav = useNavigate();
  return (
    <TableRow
      onClick={() => {
        nav(`/notice/announcements/${id}`);
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

export default AnnouncementTableRow;
