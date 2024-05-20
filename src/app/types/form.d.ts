import ReactQuill, { Quill } from 'react-quill';

//회원가입 - 백엔드로 보내는 용
export interface ICreateMemberProps {
  token: string;
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

//게시글 작성 - form에서 입력된 데이터 받아오는 용
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

//게시글 작성 - 백엔드로 보내는 용
// export interface ICreatePostDataProps {
//   uploadVideos: FormData;
//   thumbnailImage: FormData;
//   videoUrl: string;
//   postAddRequest: {
//     title: string;
//     content: string;
//     type: string;
//     hashTag: string[];
//     inGameInfoRequests: {
//       position: string;
//       tier: string;
//       championName: string;
//     }[];
//   };
// }

// export interface ICreatePostDataProps {
//   uploadVideos: FormData;
//   thumbnailImage: FormData;
//   videoUrl: string;
//   postAddRequest: {
//     title: string;
//     content: string;
//     type: string;
//     hashTag: string[];
//     inGameInfoRequests: {
//       position: string;
//       tier: string;
//       championName: string;
//     }[];
//   };
// }

interface inGameInfoRequests {
  position: string;
  tier: string;
  championName: string;
}

interface ICreatePostRequestProps {
  title: stirng;
  // content: string;
  type: string;
  hashtag: string[];
  ingameInfoRequests: inGameInfoRequests[];
  videoUrl: string;
}

// interface ICreatePostDataProps {
//   uploadVideos: File;
//   thumbnailImage: File;
//   postAddRequest: ICreatePostRequestProps;
// }

//투표 - 세부 구조
export interface ICreateVoteProps {
  ingameInfoId: number;
  ratio: number;
}

//투표 - 백엔드로 보내는 용
// export interface ICreateVotingDataProps {
//   memberId: number;
//   vote: ICreateVoteProps[];
// }
export type ICreateVotingDataProps = ICreateVoteProps[];

//react-quill
export interface IWrappedComponent
  extends React.ComponentProps<typeof ReactQuill> {
  forwardedRef: LegacyRef<ReactQuill>;
}

//image
interface ICreateImageData {
  imageUrl: string[];
}

//video
export interface ICreateVideoProps {}

//댓글 - 백엔드로 보내는 용
export interface ICreateCommentDataProps {
  postId: number;
  parentCommentId: number | null;
  depth: number;
  comment: string; //내용
}

export interface ICreateCommentPostDataProps {
  parentId: number | null;
  content: string; //내용
}

//댓글 - 불러오기 용 (나중에 실제 db에서 받아오는 값 보고 다시 바꿀 것)
export interface ICreateCommentProps0 {
  postId: number;
  commentId: number;
  nickname: string;
  tier: string;
  parentCommentId: number | null;
  depth: number;
  comment: string;
}

export interface ICreateCommentProps {
  id: number;
  content: string;
  member: {
    nickname: number;
    tier: string;
  };
}
export interface ICreateCommentsProps {
  id: number;
  content: string;
  member: {
    nickname: number;
    tier: string;
  };
  children: ICreateReplyProps[];
}

export interface ICreateReplyProps {
  id: number;
  content: string;
  member: {
    nickname: number;
    tier: string;
  };
}
