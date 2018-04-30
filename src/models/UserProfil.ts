export class UserProfil {
  login: string;
  title: string;
  internal_email: string;
  lastname: string;
  firstname: string;
  userinfo: {};
  referent_used: boolean;
  picture: string;
  picture_fun: string;
  scolaryear: number;
  promo: number;
  semester: number;
  location: string;
  documents: string;
  userdocs: string;
  shell: string;
  close: boolean;
  ctime: string;
  mtime: string;
  id_promo: number;
  id_history: number;
  course_code: string;
  semester_code: string;
  school_id: number;
  school_code: string;
  school_title: string;
  old_id_promo: string;
  old_id_location: string;
  rights: {};
  invited: boolean;
  studentyear: number;
  admin: boolean;
  editable: boolean;
  restrictprofiles: boolean;
  groups: [
    {
      title: string;
      name: string;
      count: number
    }
    ];
  events: [null];
  credits: number;
  gpa: [
    {
      gpa: number;
      cycle: string
    }
    ];
  spice: number
}
