export default interface BlogPost {
  id?: number;
  title: string;
  subtitle?: string;
  author?: string;
  author_link?: string;
  content: string;
  cover_picture?: string;
  timestamps: number;
}
