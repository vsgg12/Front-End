export interface IPostReadParams {
  postId: string;
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

export interface ChampionData {
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

export interface IPostVotingProps {
  memberId: number;
  ingameInfoId: '';
  ratio: number;
  createDateTime: '';
}

export interface IPostCommentProps {
  postId: number;
}
