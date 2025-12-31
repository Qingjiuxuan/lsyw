import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: number;
  title: string;
  icon: LucideIcon;
  features: {
    label: string;
    description: string;
  }[];
}

export interface TimelineItem {
  service: string;
  time: string;
}

export interface ContactItem {
  platform: string;
  value: string;
  link?: string;
  note?: string;
  icon: LucideIcon;
  primary?: boolean;
}
