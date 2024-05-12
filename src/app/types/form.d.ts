import ReactQuill, { Quill } from 'react-quill';

export interface ICreateMemberProps {
  id: string;
  email: string;
  nickname: string; //직접 작성
  age: string;
  gender: string;
  mobile: string;
  profileImage: string;
  agreeAge: boolean; //직접 동의
  agreeTerms: boolean; //직접 동의
  agreePrivacy: boolean; //직접 동의
  agreePromotion: boolean; //직접 동의
}

export interface ICreatePostProps {
  title: string;
  content: string;
  thumbnailUrl: string;
  videoType: string;
  ingameInfo: [
    {
      champion: string;
      position: string;
      tier: string;
    },
  ];
}

export interface IWrappedComponent
  extends React.ComponentProps<typeof ReactQuill> {
  forwardedRef: LegacyRef<ReactQuill>;
}

export interface ICreateVideoProps {}
