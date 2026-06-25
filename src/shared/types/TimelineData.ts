export interface TimelineData {
  id: string;
  contentTop: string;
  contentTop2?: string;
  contentBottom: string;
}
export interface TimelineProps {
  items: TimelineData[];
}
