'use client';
import { createVote } from '@/app/service/vote';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

// const ingameInfos = [
//   { id: 0, championName: '챔1', position: 'top', tier: 'grandmaster' },
//   { id: 11, championName: '챔2', position: 'jungle', tier: 'siver' },
//   { id: 22, championName: '챔3', position: 'mid', tier: 'gold' },
//   { id: 3, championName: '챔4', position: 'onedeal', tier: 'bronze' },
//   { id: 4, championName: '챔5', position: 'support', tier: 'iron' },
// ];

export default function VoteForm({ ingameInfos }: any) {
  //useState
  const [vote, setVote] = useState(
    ingameInfos.map((info: any) => ({
      ingameInfoId: info.inGameInfoId,
      ratio: 0,
    })),
  );

  // ingameInfos 배열이 비어있을 경우 대비
  const [selectedIngameInfoIndex, setSelectedIngameInfoIndex] =
    useState<number>(
      ingameInfos.length > 0 ? 0 : -1, // 처음에 0번 인덱스를 선택
    );
  const [selectedChamp, setSelectedChamp] = useState<string>(
    ingameInfos.length > 0 ? ingameInfos[0].championName : '',
  );

  const [votingButtonInfos, setVotingButtonInfos] = useState(
    Array(10).fill({ selectedChampIndex: undefined }),
  );

  //useForm
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = async (data) => {
    // 0: {ingameInfoId: 11, ratio: 0}1: {ingameInfoId: 12, ratio: 0}

    const voteData = [
      { ingameInfoId: 11, ratio: 2 },
      { ingameInfoId: 12, ratio: 8 },
    ];
    console.log(voteData);
    // const res = await createVote(vote);
    const res = await createVote(voteData);

    // console.log(res);
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
    const newVote = vote.map((v: any) => ({
      ...v,
      ratio: votingButtonInfos.filter(
        (vBtnInfo) => vBtnInfo.selectedChampIndex === v.ingameInfoId,
      ).length,
    }));
    setVote(newVote);
  };

  useEffect(() => {
    if (ingameInfos && ingameInfos.length > 0) {
      setVote(
        ingameInfos.map((info: any) => ({
          ingameInfoId: info.id,
          ratio: 0,
        })),
      );
      setSelectedIngameInfoIndex(0); // 초기 상태로 첫 번째 챔피언 선택
      setSelectedChamp(ingameInfos[0].championName);
    }
  }, [ingameInfos]);

  useEffect(() => {
    updateVoteRatios();
  }, [votingButtonInfos]);

  if (!ingameInfos || ingameInfos.length === 0) {
    return <div>게임 정보를 불러오는 중...</div>;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-content-pd p-content-rounded p-last-mb flex h-fit w-full flex-col bg-white">
          <div className="relative flex w-full flex-row items-center">
            <div className="mx-2 flex flex-col ">
              {ingameInfos.map((ingameInfo: any, index: any) => (
                <div key={index}>
                  <input
                    type="radio"
                    className="p-input-hidden"
                    name={`id-${ingameInfo.inGameInfoId}`}
                    id={`${ingameInfo.inGameInfoId}`}
                    onChange={() => {
                      setSelectedIngameInfoIndex(index);
                      setSelectedChamp(ingameInfo.championName);
                    }}
                    checked={
                      ingameInfos[selectedIngameInfoIndex].inGameInfoId ===
                      ingameInfo.inGameInfoId
                    }
                  />
                  <label
                    htmlFor={`${ingameInfo.inGameInfoId}`}
                    className="mb-1 flex cursor-pointer flex-row items-center hover:underline  "
                  >
                    <div
                      className={
                        'p-voting-champ-dot ' + changeIngameInfoColor(index)
                      }
                    ></div>
                    <div className="whitespace-nowrap">
                      {ingameInfo.championName}
                    </div>
                  </label>
                </div>
              ))}
            </div>
            <div className="flex grow flex-col items-center justify-center">
              <div className="mb-[3rem] text-[20px]">
                이 게임의 과실은 몇 대 몇~?
              </div>
              <div className="flex  flex-col items-center">
                <div className="p-content-s-mb flex flex-row">
                  {vote.map((eachVote: any, index: any) => (
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
                          ingameInfos[selectedIngameInfoIndex].inGameInfoId ===
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
              </div>
              <div className="text-[12px] text-[#7B7B7B]">
                {selectedChamp}의 과실을 선택해주세요
              </div>
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
