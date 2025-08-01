export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  images: string[];
  videos?: string[];
  tags: string[];
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
  };
}
