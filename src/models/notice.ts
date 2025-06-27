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

export interface AnnouncementsItem {
  id: string;
  index: number;
  date: string;
  title: string;
  url: string;
}
export interface AnnouncementsTableProps {
  data: AnnouncementsItem[];
}
