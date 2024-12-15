export type MemberInfoType = {
  name: string;
  introduction: string;
  github?: string;
  website?: string;
  youtube?: string;
  soundcloud?: string;
};

export type MemberDataType = {
  members: MemberInfoType[];
};
