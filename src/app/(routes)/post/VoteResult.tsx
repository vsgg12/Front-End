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
  return <>결과</>;
}
