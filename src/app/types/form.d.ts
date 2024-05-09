interface ICreateMemberProps {
  id: string;
  email: string;
  nickname: string;
  mobileNumber: string;
  profileImage: string;
  age: number;
}

interface ICreatePostProps {
  title: string;
  content: string;
  thumbnailUrl: string;
  videoType: string;
  //사진
  //판결시작일자
  //판결 종료일자
  ingameInfo: [
    {
      champion: string;
      tier: string;
      position: string;
      //type?:string
    },
  ];
}

interface ICreateVideoProps {}
