'use client';
import { getVotingResults } from '@/app/service/vote';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function VoteResult({ postId, ingameInfos }: any) {
  useEffect(() => {
    async function getResult() {
      const res = await getVotingResults(postId);
      console.log(res);
      console.log(ingameInfos);
    }
    getResult();
  }, [ingameInfos]);
  return (
    <>
      <div className="p-content-pd p-content-rounded p-last-mb flex h-fit w-full flex-col bg-white">
        투표가 완료되었습니다.
      </div>
    </>
  );
}
