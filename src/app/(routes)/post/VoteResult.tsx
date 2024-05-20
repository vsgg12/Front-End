'use client';
import { getVotingResults } from '@/app/service/vote';
import { useEffect, useState } from 'react';

export default function VoteResult({ postId, ingameInfos }: any) {
  const [voteInfos, setVoteInfos] = useState<any[]>([]);

  useEffect(() => {
    async function getResult() {
      try {
        const res = await getVotingResults(postId);
        if (Array.isArray(res)) {
          setVoteInfos(res);
        } else {
          console.error('Expected an array from getVotingResults');
        }
      } catch (error) {
        console.error('Failed to fetch voting results:', error);
      }
    }
    getResult();
  }, [postId]); // Use postId as dependency to trigger the effect when postId changes

  const changeIngameInfoColor = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-[#000000]';
      case 1:
        return 'bg-[#9D2A2C]';
      case 2:
        return 'bg-[#CACACA]';
      case 3:
        return 'bg-[#656565]';
      case 4:
        return 'bg-[#6C0000]';
    }
  };

  const changeVoteInfoColor = (index: number) => {
    switch (index) {
      case 0:
        return 'text-[#000000]';
      case 1:
        return 'text-[#9D2A2C]';
      case 2:
        return 'text-[#CACACA]';
      case 3:
        return 'text-[#656565]';
      case 4:
        return 'text-[#6C0000]';
      default:
        return '';
    }
  };

  {
    /* <label
                    className="mb-1 flex cursor-pointer flex-row items-center hover:underline  "
                  >
                    <div
                      className={
                        'p-voting-champ-dot ' + changeIngameInfoColor(index)
                      }
                    ></div> */
  }

  return (
    <div className="p-content-pd p-content-rounded p-last-mb flex h-fit w-full flex-col bg-white">
      <div className="mb-[10px]  flex text-[20px] ">
        판결 결과는?
        <div className="ml-[10px] text-[#8f8f8f]">(전체 평균)</div>
      </div>
      {voteInfos.map((gameInfo: any, index: number) => (
        <div key={index} className="flex w-full ">
          <div
            className={
              'mb-[10px] flex items-center ' + changeVoteInfoColor(index)
            }
          >
            <div
              className={'p-voting-champ-dot ' + changeIngameInfoColor(index)}
            ></div>
            <div className="flex flex-row items-center">
              {gameInfo.championName}
              <div className="mr-[10px]"></div>
            </div>
            <div>{gameInfo.averageValue}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
