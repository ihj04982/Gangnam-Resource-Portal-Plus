import { useParams } from 'react-router';

const NoticeDetail = () => {
  const { id } = useParams();
  return <div>{id} NoticeDetail</div>;
};

export default NoticeDetail;
