interface ArtistInfo {
  name: string;
  occupation: string;
  email: string;
  phone: string;
  quote: string;
  subquote: string;
  bio: string;
  social_links: {
    [key: string]: string;
  };
}
export default ArtistInfo;
