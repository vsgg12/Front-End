export default function convertMemberFormData(data: ICreateMemberProps) {
  const convertedData = {
    id: data.id,
    email: data.email,
    nickname: data.nickname,
    mobileNumber: data.mobileNumber,
    profileImage: data.profileImage,
    age: data.age,
  };
  return convertedData;
}
