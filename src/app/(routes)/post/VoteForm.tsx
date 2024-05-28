'use client';
import Loading from '@/app/components/Loading';
import { createVote } from '@/app/service/vote';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function VoteForm({ ingameInfos, setIsVoted }: any) {
  const router = useRouter();

  //useState
  const [vote, setVote] = useState(
    ingameInfos.map((info: any) => ({
      inGameInfoId: info.inGameInfoId,
      ratio: 0,
    })),
  );
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIngameInfoId, setSelectedIngameInfoId] = useState<number>(
    ingameInfos[0].inGameInfoId,
  );
  const [selectedChamp, setSelectedChamp] = useState<string>(
    ingameInfos[0].championName,
  );
  const [votingButtonInfos, setVotingButtonInfos] = useState(
    Array(10).fill({ selectedChampId: undefined }),
  );

  //useForm
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = async (data) => {
    const voteData = vote.map(({ inGameInfoId, ...rest }: any) => ({
      ingameInfoId: inGameInfoId,
      ...rest,
    }));

    const totalRatio = voteData.reduce(
      (sum: any, { ratio }: any) => sum + ratio,
      0,
    );

    // Check if the sum of the ratios is not equal to 10
    if (totalRatio !== 10) {
      alert('판결을 확인해주세요');
      return;
    }

    setIsLoading(true);
    const res = await createVote(voteData);
    if (res.resultCode === 200) {
      setIsLoading(false);
      setIsVoted(true);
      router.refresh();
    } else {
      setIsVoted(false);
    }
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
    if (selectedIngameInfoId !== undefined) {
      const newVotingButtonInfos = votingButtonInfos.map((vBtnInfo, idx) => {
        if (idx === index) {
          return { selectedChampId: selectedIngameInfoId };
        }
        return vBtnInfo;
      });

      setVotingButtonInfos(newVotingButtonInfos);
    }
  };

  const handleVoteButtonStyleChange = (index: number): string => {
    const currentColorClass =
      votingButtonInfos[index].selectedChampId !== undefined
        ? changeIngameInfoColor(
            ingameInfos.findIndex(
              (info: any) =>
                info.inGameInfoId === votingButtonInfos[index].selectedChampId,
            ),
          )
        : '';

    return votingButtonInfos[index].selectedChampId === selectedIngameInfoId
      ? changeIngameInfoColor(selectedIndex) + ' p-voing-bar-element'
      : currentColorClass + ' p-voing-bar-element';
  };
  const updateVoteRatios = () => {
    const newVote = vote.map((v: any) => ({
      ...v,
      ratio: votingButtonInfos.filter(
        (vBtnInfo) => vBtnInfo.selectedChampId === v.inGameInfoId,
      ).length,
    }));
    setVote(newVote);
  };

  useEffect(() => {
    updateVoteRatios();
  }, [votingButtonInfos]);

  useEffect(() => {
    if (ingameInfos.length > 0) {
      setSelectedIngameInfoId(ingameInfos[0].inGameInfoId);
      setSelectedChamp(ingameInfos[0].championName);
    }
  }, [ingameInfos]);

  if (!ingameInfos || isLoading) {
    return (
      <div className="p-content-pd p-content-rounded p-last-mb flex h-fit w-full flex-col bg-white">
        <div className="relative flex w-full flex-row items-center">
          <Loading />
        </div>
      </div>
    );
  }

  // if (!isLoading) {
  //   return (
  //     <div className="p-content-pd p-content-rounded p-last-mb flex h-fit w-full flex-col bg-white">
  //       <div className="relative flex w-full flex-row items-center">
  //         <Loading />
  //       </div>
  //     </div>
  //   );
  // }

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
                      setSelectedIngameInfoId(ingameInfos[index].inGameInfoId);
                      setSelectedChamp(ingameInfo.championName);
                      setSelectedIndex(index);
                    }}
                    checked={selectedIngameInfoId === ingameInfo.inGameInfoId}
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
                          selectedIngameInfoId === vBtnInfo.selectedChampId
                        }
                      />
                      {index === 0 ? (
                        <label
                          htmlFor={`vote-${index}`}
                          className={
                            handleVoteButtonStyleChange(index) +
                            ' rounded-l-[30px]'
                          }
                        ></label>
                      ) : index === 9 ? (
                        <label
                          htmlFor={`vote-${index}`}
                          className={
                            handleVoteButtonStyleChange(index) +
                            ' rounded-r-[30px]'
                          }
                        ></label>
                      ) : (
                        <label
                          htmlFor={`vote-${index}`}
                          className={handleVoteButtonStyleChange(index)}
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
