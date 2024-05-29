'use client';
import { getVotingResults } from '@/app/service/vote';
import { useEffect, useState } from 'react';
import DoughnutChart from '@/app/components/DoughnutChart';
import { SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';
import topWSVG from '../../../../public/svg/top-w.svg';
import midWSVG from '../../../../public/svg/mid-w.svg';
import jungleWSVG from '../../../../public/svg/jungle-w.svg';
import onedealWSVG from '../../../../public/svg/onedeal-w.svg';
import supportWSVG from '../../../../public/svg/supporter-w.svg';

const ingameInfoDummy = [
  { id: 0, championName: '이렐리아', averageValue: 4 },
  { id: 1, championName: '마스터 이', averageValue: 4 },
  { id: 2, championName: '가렌', averageValue: 2 },
];

export default function VoteResult({ postId }: any) {
  const [voteInfos, setVoteInfos] = useState<any[]>([]);

  const [selectedIngameInfoIndex, setSelectedIngameInfoIndex] =
    useState<number>(ingameInfoDummy[0].id);
  const [selectedChamp, setSelectedChamp] = useState<string>(
    ingameInfoDummy[0].championName,
  );

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
    }
  };

  const changeHoverColor = (index: number) => {
    switch (index) {
      case 0:
        return '[#000000]';
      case 1:
        return '[#9D2A2C]';
      case 2:
        return '[#CACACA]';
      case 3:
        return '[#656565]';
      case 4:
        return '[#6C0000]';
    }
  };

  const changeVoteInfoBorderColor = (index: number) => {
    switch (index) {
      case 0:
        return 'border-[#000000]';
      case 1:
        return 'border-[#9D2A2C]';
      case 2:
        return 'border-[#CACACA]';
      case 3:
        return 'border-[#656565]';
      case 4:
        return 'border-[#6C0000]';
    }
  };

  const changePositionName = (position: string) => {
    switch (position) {
      case 'TOP':
        return '탑';
      case 'ADCARRY':
        return '원딜';
      case 'MID':
        return '미드';
      case 'JUNGLE':
        return '정글';
      case 'SUPPORT':
        return '서폿';
    }
  };

  const changeTierName = (tier: string) => {
    switch (tier) {
      case 'IRON':
        return '아이언';
      case 'SILVER':
        return '원딜';
      case 'DIAMOND':
        return '미드';
      case 'JUNGLE':
        return '정글';
      case 'SUPPORT':
        return '서폿';
    }
  };

  const changePostionSVG = (position: string) => {
    switch (position) {
      case 'TOP':
        return <Image alt="top" src={topWSVG} />;
      case 'ADCARRY':
        return <Image alt="top" src={onedealWSVG} />;
      case 'MID':
        return <Image alt="top" src={midWSVG} />;
      case 'JUNGLE':
        return <Image alt="JUNGLE" src={jungleWSVG} />;
      case 'SUPPORT':
        return <Image alt="top" src={supportWSVG} />;
    }
  };

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

  return (
    <>
      <div className="p-content-pd p-content-rounded p-last-mb flex h-fit w-full flex-col bg-white">
        <div className="relative flex w-full flex-row items-center">
          <div className="mx-2 flex flex-col ">
            {ingameInfoDummy.map((ingameInfo, index) => (
              <div key={index}>
                <label
                  htmlFor={`${ingameInfo.inGameInfoId}`}
                  className={'v-label ' + changeVoteInfoBorderColor(index)}
                >
                  <div
                    className={
                      changeIngameInfoColor(index) +
                      ' flex h-[48px] w-[48px] items-center justify-center rounded-full'
                    }
                  >
                    {changePostionSVG(ingameInfo.position)}
                  </div>
                  <div className="mx-[10px] text-[16px] font-semibold text-[#8A1F21]">
                    {changePositionName(ingameInfo.position)}
                  </div>
                  <div className="w-[50%]">
                    <div className="text=[#33333] text-[14px] font-semibold">
                      {ingameInfo.championName}
                    </div>
                    <div className="text=[#33333] text-[12px]">
                      {ingameInfo.tier}
                    </div>
                  </div>
                </label>
              </div>
            ))}
          </div>
          <div className="flex grow flex-col items-center justify-center">
            <div className="mb-[3rem] text-[20px]">
              이 게임의 과실은 몇 대 몇~?
            </div>
            <DoughnutChart ingameInfos={ingameInfoDummy} />
          </div>
        </div>
      </div>
    </>
  );
}
