'use client';
import { getVotingResults } from '@/app/service/vote';
import { useEffect, useState } from 'react';
import DoughnutChart from '@/app/components/DoughnutChart';
import { SubmitHandler, useForm } from 'react-hook-form';

const ingameInfoDummy = [
  { id: 0, championName: '이렐리아', averageValue: 4 },
  { id: 1, championName: '마스터 이', averageValue: 4 },
  { id: 2, championName: '가렌', averageValue: 2 },
];

export default function VoteResult({ postId }: any) {
  const [voteInfos, setVoteInfos] = useState<any[]>([]);

  const [votingButtonInfos, setVotingButtonInfos] = useState(
    Array(10).fill({ selectedChampIndex: undefined }),
  );

  const [selectedIngameInfoIndex, setSelectedIngameInfoIndex] =
    useState<number>(ingameInfoDummy[0].id);
  const [selectedChamp, setSelectedChamp] = useState<string>(
    ingameInfoDummy[0].championName,
  );

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => {
    // const voteData: ICreateVotingDataProps = {
    //   memberId: memberId,
    //   vote: [...vote],
    // };
    // console.log(voteData);
    console.log(votingButtonInfos);
  };

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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-content-pd p-content-rounded p-last-mb flex h-fit w-full flex-col bg-white">
          <div className="relative flex w-full flex-row items-center">
            <div className="mx-2 flex flex-col ">
              {ingameInfoDummy.map((ingameInfo, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    className="p-input-hidden"
                    name={`id-${ingameInfo.id}`}
                    id={`${ingameInfo.id}`}
                    onChange={() => {
                      setSelectedIngameInfoIndex(index);
                      setSelectedChamp(ingameInfo.championName);
                    }}
                    checked={
                      ingameInfoDummy[selectedIngameInfoIndex].id ===
                      ingameInfo.id
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
              <DoughnutChart ingameInfos={ingameInfoDummy} />
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
