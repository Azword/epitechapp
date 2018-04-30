export class ProjectDetails {
  type: string;
  slug: string;
  title: string;
  secure: boolean;
  synchro: boolean;
  archive: boolean;
  language: string;
  size: number;
  ctime: string;
  mtime: string;
  mime: string;
  isLeaf: boolean;
  noFolder: boolean;
  rights: {
    ged_read: number;
    ged_write: number;
  };
  modifier: {
    login: string;
    title: string;
    picture: string
  };
  fullpath: string
}
