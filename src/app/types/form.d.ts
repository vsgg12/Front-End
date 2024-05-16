import ReactQuill, { Quill } from 'react-quill';

//백엔드로 보내는 용
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

//form에서 입력된 데이터 받아오는 용
export interface ICreatePostFormProps {
  videoType: string;
  link: string;
  title: string;
  content: string;
  ingameInfo: [
    {
      champion: string;
      position: string;
      tier: string;
    },
  ];
}

//백엔드로 보내는 용
export interface ICreatePostDataProps {
  uploadedVideos: FormData;
  videoUrl: string;
  postAddRequests: {
    title: string;
    content: string;
    type: string;
    hashTag: string[];
  };
  inGameInfoRequests: {
    position: string;
    champion: string;
    tier: string;
  }[];
}

export interface ICreateVoteProps {
  ingameInfoId: number;
  ratio: number;
}

export interface ICreateVotingDataProps {
  memberId: number;
  vote: ICreateVoteProps[];
}

export interface IWrappedComponent
  extends React.ComponentProps<typeof ReactQuill> {
  forwardedRef: LegacyRef<ReactQuill>;
}

export interface ICreateVideoProps {}
