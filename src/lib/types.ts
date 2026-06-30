export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
  updatedDate?: string;
  author: string;
  readTime: number;
  featured: boolean;
  image?: string;
}
