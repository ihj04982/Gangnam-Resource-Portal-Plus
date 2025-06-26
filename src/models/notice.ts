export interface FaqItem {
  id: string;
  index: number;
  date: string;
  title: string;
  contents: string[];
}
export interface NoticeTableProps {
  data: FaqItem[];
}
