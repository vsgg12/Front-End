'use client';
import PostReturnBtn from '@/app/components/post/PostReturnBtn';
import PostVidUploadTab from '@/app/components/post/PostVidUploadTab';
import Logo from '@/app/components/Logo';

import { IoLinkOutline } from 'react-icons/io5';
import { IoDocumentOutline } from 'react-icons/io5';
import { IoWarningOutline } from 'react-icons/io5';
import { PiDotOutlineFill } from 'react-icons/pi';
import { IoVideocamOutline } from 'react-icons/io5';
import { IoEaselOutline } from 'react-icons/io5';
import { SlPicture } from 'react-icons/sl';
import { IoCloseOutline } from 'react-icons/io5';
import { IoCompassOutline } from 'react-icons/io5';
import { IoAddCircleOutline } from 'react-icons/io5';
import { IoSaveOutline } from 'react-icons/io5';

import { useRef, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ChampionData } from '@/app/types/post';

export default function PostWrite() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedPos, setSelectedPos] = useState<number>(0);
  const [champions, setChampions] = useState<string[]>(['챔피언 선택']);

  const { register, handleSubmit } = useForm();

  const tabs = [
    {
      title: '파일 불러오기',
      content: (
        <div className="flex flex-row items-center justify-center">
          <IoDocumentOutline className="mr-[10px] text-[20px]" />
          <div>파일을 끌어오거나 클릭 후 업로드 하세요</div>
        </div>
      ),
    },
    {
      title: '링크로 불러오기',
      content: (
        <div className="flex flex-row items-center ">
          <div className="flex flex-row items-center justify-center">
            <IoLinkOutline className="mr-[10px] text-[25px]" />
            <input
              type="text"
              placeholder="링크를 붙여 넣어주세요"
              className="p-font-color-default outline-none"
            />
          </div>
        </div>
      ),
    },
    {
      title: '썸네일 업로드',
      content: (
        <div className="flex flex-row items-center justify-center">
          <IoDocumentOutline className="mr-[10px] text-[20px]" />
          <div>파일을 끌어오거나 클릭 후 업로드 하세요</div>
        </div>
      ),
    },
  ];

  const positions = [
    {
      id: 'top',
      value: 'top',
      content: '탑',
    },
    {
      id: 'mid',
      value: 'mid',
      content: '미드',
    },
    {
      id: 'jungle',
      value: 'jungle',
      content: '정글',
    },
    {
      id: 'onedeal',
      value: 'onedeal',
      content: '원딜',
    },
    {
      id: 'support',
      value: 'support',
      content: '서폿',
    },
  ];

  const tiers = [
    { id: undefined, value: undefined, content: '티어 선택' },
    { id: 'iron', value: 'iron', content: '아이언' },
    { id: 'bronze', value: 'bronze', content: '브론즈' },
    { id: 'silver', value: 'silver', content: '실버' },
    { id: 'gold', value: 'gold', content: '골드' },
    { id: 'platinum', value: 'platinum', content: '플래티넘' },
    { id: 'emerald', value: 'emerald', content: '에메랄드' },
    { id: 'diamond', value: 'diamond', content: '다이아' },
    { id: 'master', value: 'master', content: '마스터' },
    { id: 'grand_master', value: 'grand_master', content: '그랜드마스터' },
    { id: 'challenger', value: 'challenger', content: '챌린저' },
  ];

  const getLOLChampList = () => {
    fetch(
      'https://ddragon.leagueoflegends.com/cdn/14.9.1/data/ko_KR/champion.json',
    )
      .then((response) => response.json())
      .then((data: ChampionData) => {
        const loadedChampions = Object.keys(data.data).map(
          (key) => data.data[key].name,
        );

        const sortedChampions = loadedChampions.sort(function (a, b) {
          return a.localeCompare(b);
        });

        setChampions((prev) => [...prev, ...sortedChampions]);
      })
      .catch((error) => console.error('Error loading the champions:', error));
  };

  const setTextAreaPlaceHoler = () => {
    if (textAreaRef.current) {
      textAreaRef.current.placeholder =
        '[게시글 내용 작성 가이드]\n\n' +
        '1. 리플레이 영상 업로드는 필수! 판결을 받고 싶은 부분만 편집해 업로드 하기\n' +
        '- 파일 크기 제한 : 500MB\n' +
        '- 파일 형식: mp4\n' +
        "2. 게임 상황의 이해를 돕기 위해 '플레이 정보를 담은 전적 캡처 이미지'를 첨부하기\n" +
        '- 파일 크기 제한 : 2MB\n' +
        '- 파일 형식: jpg, jpge, png\n' +
        '3. 상황 설명은 자세하게 글로 작성하기\n' +
        '- 문자 수 제한 : 1000자 이내\n';
    }
  };

  const changeTabTitleStyle = (index: number) => {
    if (selectedTab === index) {
      return 'p-tab-title p-tab-selected';
    } else {
      return 'p-tab-title p-tab-n-selected';
    }
  };

  const changeTabContentStyle = (index: number) => {
    return `p-tab-content ${selectedTab === index ? '' : 'hidden'}`;
  };

  const changePositionRadioStyle = (index: number) => {
    if (selectedPos === index) {
      return 'p-position p-position-selected';
    } else {
      return 'p-position p-position-n-selected';
    }
  };

  useEffect(() => {
    setTextAreaPlaceHoler();
    getLOLChampList();
  }, []);

  return (
    <>
      <main>
        <div className="flex items-center justify-center p-[100px]">
          <Logo />
        </div>
        <section className="flex justify-center">
          <div className="w-fit">
            <header className="mb-[44px] flex flex-row items-center justify-between">
              <PostReturnBtn>뒤로 가기</PostReturnBtn>
              <div className="text-[12px] text-[#909090]">홈{' > '}게시글</div>
            </header>

            <div className="p-content-pd p-content-rounded mb-[200px] h-fit w-[1440px] bg-[#ffffff]">
              <div className="mb-[5px] ml-[30px] flex flex-row items-center">
                <div className=" mr-[6px] text-[20px] text-[#333333] ">
                  파일 첨부
                </div>
                <IoWarningOutline className="mr-[6px] cursor-pointer text-[25px] text-[#828282]" />
                <div className="h-[120px] w-[180px] rounded-[5px] border-[1.5px] border-[#828282] p-[15px] text-[10px] font-medium text-[#828282]">
                  <div>1. 파일불러오기</div>
                  <div>
                    <div className="flex flex-row items-center pl-[10px]">
                      <PiDotOutlineFill />
                      <div>파일 크기 제한 : 500MB</div>
                    </div>
                    <div className="flex flex-row items-center pl-[10px]">
                      <PiDotOutlineFill />
                      <div>파일 형식 : mp4</div>
                    </div>
                  </div>
                  <div>2. 썸네일 업로드</div>
                  <div>
                    <div className="flex flex-row items-center pl-[10px]">
                      <PiDotOutlineFill />
                      <div>파일 크기 제한: 2MB</div>
                    </div>
                    <div className="flex flex-row items-center pl-[10px]">
                      <PiDotOutlineFill />
                      <div>파일 형식: jpg, jpeg, png</div>
                    </div>
                  </div>
                </div>
              </div>

              <form>
                <div className="p-content-mb relative h-[150px]">
                  <div className="absolute z-10 ml-[30px] ">
                    {tabs.map((tab, index) => (
                      <button
                        type="button"
                        key={index}
                        onClick={() => setSelectedTab(index)}
                        className={changeTabTitleStyle(index)}
                      >
                        <div className="flex flex-col items-center justify-center">
                          <div className="text-[30px]">
                            {index === 0 ? (
                              <IoVideocamOutline />
                            ) : index === 1 ? (
                              <IoLinkOutline />
                            ) : index === 2 ? (
                              <IoEaselOutline />
                            ) : null}
                          </div>
                          <div className="">{tab.title}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div>
                    {tabs.map((tab, index) => (
                      <div key={index} className={changeTabContentStyle(index)}>
                        {tab.content}
                      </div>
                    ))}
                  </div>
                </div>
                <hr className="p-content-mb border-[#828282]" />

                <div className="p-content-mb mx-[30px] text-[20px] text-[#333333]">
                  글 작성
                </div>
                <div className="p-content-mb p-font-color-default flex flex-row items-center justify-center">
                  <div className="mx-[30px] text-[24px]">제목</div>
                  <input
                    type="text"
                    maxLength={35}
                    className=" grow rounded-[30px] border-[1.5px] border-[#828282] px-[30px] py-[15px] text-[22px]  outline-none"
                    placeholder="최대 35글자 입력 가능합니다."
                  />
                </div>
                <div className="p-content-mb h-[882px] overflow-hidden  rounded-[30px] border-[1.5px] border-[#828282]">
                  <div className="flex h-[100px] items-center rounded-t-[30px] border-[1.5px] border-b-[#828282] px-[44px] py-[20px]">
                    <label
                      htmlFor="p-picture"
                      className="flex flex-col justify-center hover:cursor-pointer"
                    >
                      <SlPicture className="text-[30px]" />
                      <div>사진</div>
                    </label>
                    <input
                      type="file"
                      id="p-picture"
                      className="p-input-hidden"
                    />
                  </div>
                  <textarea
                    ref={textAreaRef}
                    className="p-content-mb h-[100%] w-[100%] whitespace-pre-wrap p-[30px] outline-none"
                    maxLength={1000}
                  />
                </div>
                <div className="mx-[30px] mb-[30px] text-[24px]">해시태그</div>
                <input
                  type="text"
                  className="mb-[30px] w-[100%] rounded-[30px] border-[1.5px] border-[#828282] px-[30px] py-[10px] outline-none"
                  placeholder="#해시태그를 등록하세요 (최대 5개)"
                />
                {/* map으로 태그 돌리기, 엔터치면 태그내용에서 스페이스 다 빼서 밑에 태그에 입력 */}
                <div className="p-content-mb ml-[30px] flex flex-row">
                  <div className="mr-[15px] flex w-fit flex-row items-center justify-center rounded-[150px] border-2 border-[#333333] px-[15px] py-[5px]">
                    <div className="mr-[8px] text-[12px]"># 바론앞한타</div>
                    <button type="button">
                      <IoCloseOutline className="text-[20px]" />
                    </button>
                  </div>
                </div>
                <hr className="p-content-mb border-[#828282]" />
                <div className="p-content-mb p-font-color-default flex flex-row items-end">
                  <div className="ml-[30px] mr-[20px] text-[24px]">
                    판결 참여자 입력
                  </div>
                  <div className="text-[12px] text-[#828282]">
                    본인을 포함해 판결에 참여할 대상의 정보를 입력해주세요
                  </div>
                </div>

                <div className="mb-[20px] flex flex-col rounded-[30px] border-[1.5px] border-[#828282] p-[20px]">
                  <div className="mb-[15px] text-[12px] text-[#333333]">
                    본인의 챔피언, 포지션, 티어를 선택해주세요.
                  </div>
                  <div className="flex w-[100%] items-center">
                    {positions.map((pos, index) => (
                      <div key={index}>
                        <input
                          type="radio"
                          name="position"
                          id={pos.id}
                          value={pos.value}
                          className="p-input-hidden"
                        />
                        <label
                          htmlFor={pos.id}
                          onClick={() => setSelectedPos(index)}
                          className={changePositionRadioStyle(index)}
                        >
                          <IoCompassOutline className="mr-[5px] text-[15px]" />
                          <div>{pos.content}</div>
                        </label>
                      </div>
                    ))}
                    <select id="champions-select" className="p-select">
                      {champions.map((champion, index) => (
                        <option key={index} value={champion}>
                          {champion}
                        </option>
                      ))}
                    </select>
                    <select id="tiers-select" className="p-select">
                      {tiers.map((tier, index) => (
                        <option key={index} id={tier.id} value={tier.value}>
                          {tier.content}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex cursor-pointer flex-row justify-center text-[50px] text-[#333333]">
                  <IoAddCircleOutline />
                </div>
                <div className="flex flex-row justify-end">
                  <button
                    type="submit"
                    className="flex flex-row items-center rounded-[50px] bg-[#8A1F21] px-[30px] py-[5px] text-[20px] text-white"
                  >
                    <IoSaveOutline className="mr-[5px]" />
                    작성완료
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
