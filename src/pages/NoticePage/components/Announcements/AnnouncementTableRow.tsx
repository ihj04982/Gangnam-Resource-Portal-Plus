import { TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router';
import type { AnnouncementsItem } from '../../../../models/notice';

const AnnouncementTableRow = ({ id, index, title, date }: AnnouncementsItem) => {
  const nav = useNavigate();

  // Function to truncate the title
  const truncateTitle = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <TableRow
      onClick={() => {
        nav(`/notice/announcements/${id}`);
      }}
      key={id}
      sx={{
        backgroundColor: '#fff',
        '&:last-child td, &:last-child th': { border: 0 },
        '&:hover': {
          bgcolor: '#DCE9C8',
          color: 'text.primary',
        },
      }}
    >
      <TableCell component="th" scope="row">
        {index}
      </TableCell>
      <TableCell sx={{ wordBreak: 'keep-all', flexGrow: 1 }}>{truncateTitle(title, 45)}</TableCell>
      <TableCell sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>{date}</TableCell>
    </TableRow>
  );
};

export default AnnouncementTableRow;
