import { BsArrowUpCircle } from 'react-icons/bs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createComment } from '@/app/utils/commentApi';

export default function PostCommentInput({ postId, parentId }: any) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = async (data) => {
    const commentData = {
      parentId: parentId,
      content: data.content,
    };

    await createComment(postId, commentData);
    console.log(commentData);
  };

  return (
    <>
      <form className="grow" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          // text-[#8A1F21]
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
