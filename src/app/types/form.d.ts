interface ICreateMemberProps {
  id: string;
  email: string;
  nickname: string;
  mobileNumber: string;
  profileImage: string;
}

interface ICreatePostProps {
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

interface ICreateVideoProps {}
