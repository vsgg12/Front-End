'use client';

import Logo from '@/app/components/Logo';
import Pagination from 'react-js-pagination';
import { useEffect, useState } from 'react';

const data = [
  {
    nickName: 'hide on bush',
    tier: '그랜드마스터',
    grade: '새싹',
    totalJudge: 100,
    winJudge: 30,
    loseJudge: 70,
  },
];

const mockData = [
  {
    title: '바론 앞 한타 갔어야한다 가지 말아야한다.',
    writer: 'hide on bush',
    grade: '새싹',
    date: '2024.04.24',
  },
  {
    title: '바론 앞 한타 갔어야한다 가지 말아야한다.',
    writer: 'hide on bush',
    grade: '새싹',
    date: '2024.04.24',
  },
  {
    title: '바론 앞 한타 갔어야한다 가지 말아야한다.',
    writer: 'hide on bush',
    grade: '새싹',
    date: '2024.04.24',
  },
  {
    title: '바론 앞 한타 갔어야한다 가지 말아야한다.',
    writer: 'hide on bush',
    grade: '새싹',
    date: '2024.04.24',
  },
  {
    title: '바론 앞 한타 갔어야한다 가지 말아야한다.',
    writer: 'hide on bush',
    grade: '새싹',
    date: '2024.04.24',
  },
  {
    title: '바론 앞 한타 갔어야한다 가지 말아야한다.',
    writer: 'hide on bush',
    grade: '새싹',
    date: '2024.04.24',
  },
  {
    title: '바론 앞 한타 갔어야한다 가지 말아야한다.',
    writer: 'hide on bush',
    grade: '새싹',
    date: '2024.04.24',
  },
  {
    title: '바론 앞 한타 갔어야한다 가지 말아야한다.',
    writer: 'hide on bush',
    grade: '새싹',
    date: '2024.04.24',
  },
];

export default function JudgeRecord() {
  const [judgeList, setJudgeList] = useState([] as any);
  const [currentJudge, setCurrentJudge] = useState(judgeList);
  const [page, setPage] = useState<number>(1);

  const judgePerPage: number = 5;
  const indexOfLastJudge: number = page * judgePerPage;
  const indexOfFirstJudge: number = indexOfLastJudge - judgePerPage;

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    fetch('http://localhost:3000/judge')
      .then((response: any) => {
        setJudgeList([...mockData].reverse());
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setCurrentJudge(mockData.slice(indexOfFirstJudge, indexOfLastJudge));
  }, [mockData, page]);

  return (
    <div>
      <div className="mt-12 text-center">
        <Logo />
      </div>
      {data.map((user) => (
        <div className="flex justify-center gap-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center justify-center gap-5 rounded-xl bg-white px-10 py-5">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="self-start text-xs">판결 승률</div>
                <div>판결</div>
                <div className="text-xs text-[#C3C3C3]">
                  {user.totalJudge}전 {user.winJudge}승 {user.loseJudge}패
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-10">
            <div className="flex flex-col gap-3 rounded-xl bg-white px-8 py-6 pb-8">
              <div className="flex items-center gap-5">
                <div>판결 전적</div>
                <div className="text-xs text-[#C3C3C3]">
                  최대 1달 전까지의 전적을 확인할 수 있어요
                </div>
              </div>
              <div className="flex justify-between text-xs text-[#C3C3C3]">
                <div>제목</div>
                <div>게시자</div>
                <div>작성일</div>
              </div>
              {currentJudge.map((judge: any, index: number) => {
                return (
                  <>
                    <div className="flex justify-between">
                      <div>{judge.title}</div>
                      <div className="flex gap-2 text-sm">
                        <div>{judge.writer}</div>
                        <div className="text-[#C3C3C3]">{judge.grade}</div>
                      </div>
                      <div className="text-sm text-[#C3C3C3]">{judge.date}</div>
                    </div>
                    <div className="h-0.5 w-full bg-[#8A1F21]"></div>
                  </>
                );
              })}
              <div className="flex items-center justify-center">
                <Pagination
                  activePage={page}
                  itemsCountPerPage={judgePerPage}
                  totalItemsCount={judgeList.length}
                  pageRangeDisplayed={5}
                  prevPageText={'<'}
                  nextPageText={'>'}
                  onChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
