export interface IPostReadParams {
  postId: string;
}

export interface IPostReturnBtnChildren {
  children: React.ReactNode;
}

export interface IPostReadSearchParams {}

export interface IPostWriteParams {
  memberId: string;
}

export interface IYoutubeDataProps {
  youtubeData: IYoutubeData;
}

export type PostVidUploadItem = {
  title: string;
  content: JSX.Element;
};

export interface IPostVidUploadTabProps {
  items: PostVidUploadItem[];
}

export interface ChampionDataProps {
  data: {
    [key: string]: {
      name: string;
    };
  };
}

export interface IPostFormProps {
  memberId: number;
  title: '';
  content: '';
  createDateTime: '';
  modifyDateTime: '';
}

export interface IPostVideoProps {
  url: '';
  type: '';
}

export interface IPostIngameInfoProps {
  postId: '';
  champion: '';
  tier: '';
  position: '';
  type: ''; //?
}

interface IGameInfoProps {
  id: number; //실제 데이터 보낼 땐 이거 빼고 보내기
  position: string;
  champion: string;
  tier: string;
}

export interface IPostVotingProps {
  memberId: number;
  ingameInfoId: '';
  ratio: number;
  createDateTime: '';
}

export interface IPostCommentProps {
  postId: number;
}
