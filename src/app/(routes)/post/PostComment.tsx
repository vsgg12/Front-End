'use client';
import { useState } from 'react';
import PostCommentInput from './PostCommentInput';
import { ICreateCommentProps } from '@/app/types/form';

export default function PostComment(props: ICreateCommentProps) {
  const [showReplyInput, setShowReplyInput] = useState(false);
  return (
    <>
      <div className="my-[30px]">
        <div className="flex flex-row font-medium">
          <div className="p-content-ss-mb mr-[6px] text-[10px] text-[#333333]">
            {props.nickname}
          </div>
          <div className="text-[10px] text-[#666666]">{props.tier}</div>
        </div>
        <div className="p-content-ss-mb text-[14px]">{props.comment}</div>
        <button
          onClick={() => {
            setShowReplyInput((prev) => !prev);
          }}
          className="text-[10px] font-medium text-[#8A1F21]"
        >
          {showReplyInput ? '닫기' : '답글'}
        </button>
        {showReplyInput && <PostCommentInput />}
      </div>
    </>
  );
}
