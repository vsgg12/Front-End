import { BsArrowUpCircle } from 'react-icons/bs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createComments } from '@/app/service/comment';
import { useRouter } from 'next/navigation';

export default function PostCommentInput({
  postId,
  parentId,
  refreshComments,
  setCommentCreated,
}: any) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<any>();

  const router = useRouter();
  const onSubmit: SubmitHandler<any> = async (data) => {
    const commentData = {
      parentId: parentId,
      content: data.content,
    };

    const res = await createComments(postId, commentData);
    if (res.resultMsg === 'OK') {
      setCommentCreated(true);
    }
  };

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
