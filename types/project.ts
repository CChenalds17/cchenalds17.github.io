export type MediaItem = {
  url: string;
  caption?: string;
};

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  coverImage: string | MediaItem;
  images?: (string | MediaItem)[];
  videos?: (string | MediaItem)[];
  tags: string[];
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
  };
}
