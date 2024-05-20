import { BsArrowUpCircle } from 'react-icons/bs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createComments } from '@/app/service/comment';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PostCommentInput({
  postId,
  parentId,
  setCommentCreated,
}: any) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  const [isSend, setIsSend] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<any> = async (data) => {
    if (data.content === '') {
      alert('댓글 내용을 작성해주세요');
      return;
    }

    const commentData = {
      parentId: parentId,
      content: data.content,
    };

    const res = await createComments(postId, commentData);
    if (res.resultCode === 201) {
      setCommentCreated(true);
      setIsSend(true);
    }
  };

  useEffect(() => {
    if (isSend) {
      reset({
        content: '',
      });
      setIsSend(false);
    }
  }, [isSend, reset]);

  return (
    <>
      <form className="grow" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register('content')}
          className=" h-[35px] w-[100%] resize-none overflow-hidden rounded-[20px] border-2 border-[#8A1F21] px-[10px] py-[5px] text-[13px] focus:outline-none"
        />
        <div className="flex w-full justify-end">
          <button
            className="row-end flex-end flex items-center text-[12px] text-[#8A1F21]"
            type="submit"
          >
            <div className="mr-[4px]">등록</div>
            <BsArrowUpCircle />
          </button>
        </div>
      </form>
    </>
  );
}
