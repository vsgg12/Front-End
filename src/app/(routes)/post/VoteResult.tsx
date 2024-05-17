'use client';
import DoughnutChart from '@/app/components/DoughnutChart';
import { ICreateVotingDataProps } from '@/app/types/form';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const ingameInfos = [
  { id: 0, champion: '이렐리아', position: 'top', tier: 'grandmaster' },
  { id: 1, champion: '마스터 이', position: 'jungle', tier: 'silver' },
  { id: 2, champion: '카타리나', position: 'mid', tier: 'gold' },
  { id: 3, champion: '이즈리얼', position: 'onedeal', tier: 'bronze' },
  { id: 4, champion: '잔나', position: 'support', tier: 'iron' },
];

const memberId = 0;

export default function VoteResult() {
  //useState
  const [vote, setVote] = useState(
    ingameInfos.map((info) => ({
      ingameInfoId: info.id,
      ratio: 0,
    })),
  );

  const [selectedIngameInfoIndex, setSelectedIngameInfoIndex] =
    useState<number>(ingameInfos[0].id);
  const [selectedChamp, setSelectedChamp] = useState<string>(
    ingameInfos[0].champion,
  );

  const [votingButtonInfos, setVotingButtonInfos] = useState(
    Array(10).fill({ selectedChampIndex: undefined }),
  );

  //useForm
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<any>();

  //useForm
  const onSubmit: SubmitHandler<any> = (data) => {
    const voteData: ICreateVotingDataProps = {
      memberId: memberId,
      vote: [...vote],
    };
    console.log(voteData);
    console.log(votingButtonInfos);
  };

  //function
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

  const handleVoteButtonChange = (index: number) => {
    if (selectedIngameInfoIndex !== undefined) {
      const newVotingButtonInfos = votingButtonInfos.map((vBtnInfo, idx) => {
        if (idx === index) {
          return { selectedChampIndex: selectedIngameInfoIndex };
        }
        return vBtnInfo;
      });

      setVotingButtonInfos(newVotingButtonInfos);
    }
  };

  const updateVoteRatios = () => {
    const newVote = vote.map((v) => ({
      ...v,
      ratio: votingButtonInfos.filter(
        (vBtnInfo) => vBtnInfo.selectedChampIndex === v.ingameInfoId,
      ).length,
    }));
    setVote(newVote);
  };

  useEffect(() => {
    updateVoteRatios();
    console.log(vote);
  }, [votingButtonInfos]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-content-pd p-content-rounded p-last-mb flex h-fit w-full flex-col bg-white">
          <div className="relative flex w-full flex-row items-center">
            <div className="mx-2 flex flex-col ">
              {ingameInfos.map((ingameInfo, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    className="p-input-hidden"
                    name={`id-${ingameInfo.id}`}
                    id={`${ingameInfo.id}`}
                    onChange={() => {
                      setSelectedIngameInfoIndex(index);
                      setSelectedChamp(ingameInfo.champion);
                    }}
                    checked={
                      ingameInfos[selectedIngameInfoIndex].id === ingameInfo.id
                    }
                  />
                  <label
                    htmlFor={`${ingameInfo.id}`}
                    className="mb-1 flex cursor-pointer flex-row items-center hover:underline  "
                  >
                    <div
                      className={
                        'p-voting-champ-dot ' + changeIngameInfoColor(index)
                      }
                    ></div>
                    <div className="whitespace-nowrap">
                      {ingameInfo.champion}
                    </div>
                  </label>
                </div>
              ))}
            </div>
            <div className="flex grow flex-col items-center justify-center">
              <div className="mb-[3rem] text-[20px]">
                이 게임의 과실은 몇 대 몇~?
              </div>
              {/* <div className="flex flex-col items-center">
                <div className="p-content-s-mb flex flex-row">
                  {vote.map((eachVote, index) => (
                    <div key={index} className="flex">
                      <div
                        className={
                          changeVoteInfoColor(index) +
                          ' p-voting-number-element'
                        }
                      >
                        {eachVote.ratio}
                      </div>
                      {index !== vote.length - 1 && (
                        <div className="p-voting-number-element "> : </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="p-content-s-mb flex flex-row">
                  {votingButtonInfos.map((vBtnInfo, index) => (
                    <div key={index} className="flex">
                      <input
                        type="radio"
                        className="p-input-hidden"
                        id={`vote-${index}`}
                        onChange={() => handleVoteButtonChange(index)}
                        checked={
                          ingameInfos[selectedIngameInfoIndex].id ===
                          vBtnInfo.selectedChampIndex
                        }
                      />
                      {index === 0 ? (
                        <label
                          htmlFor={`vote-${index}`}
                          className={
                            changeIngameInfoColor(vBtnInfo.selectedChampIndex) +
                            ' p-voing-bar-element rounded-l-[30px]'
                          }
                        ></label>
                      ) : index === 9 ? (
                        <label
                          htmlFor={`vote-${index}`}
                          className={
                            changeIngameInfoColor(vBtnInfo.selectedChampIndex) +
                            ' p-voing-bar-element rounded-r-[30px]'
                          }
                        ></label>
                      ) : (
                        <label
                          htmlFor={`vote-${index}`}
                          className={
                            changeIngameInfoColor(vBtnInfo.selectedChampIndex) +
                            ' p-voing-bar-element'
                          }
                        ></label>
                      )}
                    </div>
                  ))}
                </div>
              </div> */}
              <DoughnutChart win={30} lose={70} />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="h-9 w-28 rounded-full bg-[#8A1F21] text-lg text-white hover:bg-red-800"
            >
              제출하기
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
