'use client';
import { createUser } from '@/app/utils/userApi';
import { useForm, SubmitHandler } from 'react-hook-form';

export default function test() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ICreateMemberProps>();

  const onSubmit: SubmitHandler<ICreateMemberProps> = (data) =>
    createUser(data);

  //해당 name 가진 input watch
  console.log(watch('email')); // watch input value by passing the name of it

  return (
    <>
      <div className="flex h-[1000px] w-full items-center justify-center">
        {/* <form className="flex flex-col" action={createUser}> */}
        {/* <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          id: <input type="text" name="memberId" id="memberId" />
          email: <input type="text" name="email" id="email" />
          nickname: <input type="text" name="nickname" id="nickname" />
          mobileNumber:
          <input type="text" name="mobileNumber" id="mobileNumber" />
          profileImage:
          <input type="text" name="proflileImage" id="profileImage" />
          age:
          <input type="number" name="age" id="age" />
          <button type="submit">제출하기</button>
        </form> */}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          id: <input type="text" {...register('id')} />
          email: <input type="text" {...register('email')} />
          nickname: <input type="text" {...register('nickname')} />
          mobileNumber:
          <input type="text" {...register('mobileNumber')} />
          profileImage:
          <input type="text" {...register('profileImage')} />
          age:
          <input type="number" {...register('age')} />
          <button type="submit">제출하기</button>
        </form>
      </div>
    </>
  );
}
