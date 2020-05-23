export interface LayoutProps {
  children: any;
  home?: boolean;
  meta?: Meta;
}

interface Meta {
  og?: Og;
  title: string;
  description: string;
  url?: string;
  image?: string;
}

interface Og {
  title: string;
  image: string;
  description: string;
  url?: string;
}

export interface PostData {
  id: string;
  title: string;
  date: string;
  image?: string;
  city: string;
  country: string;
  content: string;
}

export interface ParsedMD {
  title: string;
  date: string;
  image?: string;
  city: string;
  country: string;
  content: string;
}
