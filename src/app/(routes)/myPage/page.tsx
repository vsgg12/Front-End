'use client';

import BarChart from '@/app/components/BarChart';
import HalfDoughnutChart from '@/app/components/HalfDoughnutChart';
import Logo from '@/app/components/Logo';
import { getVotingHistorys, getVotingResults } from '@/app/service/vote';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

const data = [
  {
    nickName: 'hide on bush',
    tier: '그랜드마스터',
    grade: '새싹',
    totalJudge: 100,
    winJudge: 30,
    loseJudge: 70,
    judgeCount: 50,
    winjudgeCount: 25,
  },
];

export default function MyPage() {
  const [voteResults, setVoteResults] = useState<any[]>();
  const [voteHistorys, setVoteHistorys] = useState<any[]>();
  const [memberInfos, setMemberInfos] = useState(); //data 대체, session 정보 가져오기

  useEffect(() => {
    async function getVoteResult() {
      const results = await getVotingResults();
      setVoteResults(results);
    }

    async function getVoteHistory() {
      const historys = await getVotingHistorys();
      setVoteHistorys(historys);
    }

    getVoteResult();
    getVoteHistory();
  }, []);

  return (
    <div>
      <div className="mt-12 text-center">
        <Logo />
      </div>
      {data.map((user) => (
        <div className="flex justify-center gap-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center justify-center gap-5 rounded-xl bg-white px-10 py-5">
              <div className="text-sm">{user.nickName} 님</div>
              <div className="h-[5rem] w-[5rem] rounded-full bg-[#C3C3C3]"></div>
              <div className="flex items-center justify-center gap-2">
                <div className="h-[1rem] w-[1rem] border-black bg-[#C3C3C3]"></div>
                <div className="text-sm">{user.tier}</div>
              </div>
              <div className="h-0.5 w-full bg-[#8A1F21]"></div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="self-start text-xs">판결 승률</div>
                <HalfDoughnutChart win={user.winJudge} lose={user.loseJudge} />
                <div className="text-xs text-[#C3C3C3]">
                  {user.totalJudge}전 {user.winJudge}승 {user.loseJudge}패
                </div>
              </div>
              <div className="h-0.5 w-full bg-[#8A1F21]"></div>
              <div className="flex w-full flex-col justify-center gap-4">
                <div className="text-xs">다음 등급까지</div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <BarChart num={user.judgeCount} />
                  <div className="text-xs text-[#C3C3C3]">판결 50 / 100</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <BarChart num={user.winjudgeCount} />
                  <div className="text-xs text-[#C3C3C3]">
                    승리한 판결 10 / 40
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-white p-10">
              <div>광고</div>
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-10">
            <div className="flex flex-col gap-3 rounded-xl bg-white px-8 py-6 pb-8">
              <div className="flex justify-between">
                <div>판결 전적</div>
                <div className="text-xs">더보기</div>
              </div>
              <div className="flex justify-between text-xs text-[#C3C3C3]">
                <div>제목</div>
                <div>게시자</div>
                <div>작성일</div>
              </div>
              <div className="flex justify-between">
                <div>바론 앞 한타 갔어야한다 가지 말아야한다.</div>
                <div className="flex gap-2 text-sm">
                  <div>{user.nickName}</div>
                  <div className="text-[#C3C3C3]">{user.grade}</div>
                </div>
                <div className="text-sm text-[#C3C3C3]">2024.04.24</div>
              </div>
              <div className="h-0.5 w-full bg-[#8A1F21]"></div>
              <div className="flex justify-between">
                <div>바론 앞 한타 갔어야한다 가지 말아야한다.</div>
                <div className="flex gap-2 text-sm">
                  <div>{user.nickName}</div>
                  <div className="text-[#C3C3C3]">{user.grade}</div>
                </div>
                <div className="text-sm text-[#C3C3C3]">2024.04.24</div>
              </div>
              <div className="h-0.5 w-full bg-[#8A1F21]"></div>
            </div>
            <div className="flex flex-col gap-3 rounded-xl bg-white px-8 py-6 pb-8">
              <div className="flex justify-between">
                <div>내가 쓴 글</div>
                <div className="text-xs">더보기</div>
              </div>
              <div className="flex justify-between text-xs text-[#C3C3C3]">
                <div>제목</div>
                <div>댓글수</div>
                <div>작성일</div>
              </div>
              <div className="flex justify-between">
                <div>바론 앞 한타 갔어야한다 가지 말아야한다.</div>
                <div className="flex text-sm text-[#C3C3C3]">
                  <div>5</div>
                </div>
                <div className="text-sm text-[#C3C3C3]">2024.04.24</div>
              </div>
              <div className="h-0.5 w-full bg-[#8A1F21]"></div>

              <div className="flex justify-between">
                <div>바론 앞 한타 갔어야한다 가지 말아야한다.</div>
                <div className="flex text-sm text-[#C3C3C3]">
                  <div>5</div>
                </div>
                <div className="text-sm text-[#C3C3C3]">2024.04.24</div>
              </div>
              <div className="h-0.5 w-full bg-[#8A1F21]"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
