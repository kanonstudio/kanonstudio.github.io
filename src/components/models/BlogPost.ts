export default interface BlogPost {
  id?: string;
  title: string;
  subtitle?: string;
  author?: string;
  author_link?: string;
  content: string;
  cover_picture?: string;
  timestamp: number;
}
