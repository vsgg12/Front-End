'use client';
import { ICreateCommentsProps, ICreateReplyProps } from '@/app/types/form';

export default function PostComment({
  postId,
  comment,
}: {
  postId: any;
  comment: ICreateCommentsProps | ICreateReplyProps;
}) {
  return (
    <>
      <div>
        <div className="flex flex-row font-medium">
          <div className=" mr-[6px] text-[10px] text-[#333333]">
            @ {comment?.member.nickname}
          </div>
          <div className="text-[10px] text-[#666666]">
            {comment?.member.tier}
          </div>
        </div>
        <div>{comment.content}</div>
      </div>
    </>
  );
}
