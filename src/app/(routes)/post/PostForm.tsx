'use client';
import { useRef, useEffect, useState, useMemo, LegacyRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ChampionDataProps, IGameInfoProps } from '@/app/types/post';
import PostUploadDesc from './PostUploadDesc';

import Image from 'next/image';
import topSVG from '../../../../public/svg/top.svg';
import midSVG from '../../../../public/svg/mid.svg';
import jungleSVG from '../../../../public/svg/jungle.svg';
import onedealSVG from '../../../../public/svg/onedeal.svg';
import supportSVG from '../../../../public/svg/supporter.svg';

import { IoIosClose } from 'react-icons/io';
import {
  IoVideocamOutline,
  IoEaselOutline,
  IoLinkOutline,
  IoAddCircleOutline,
  IoSaveOutline,
  IoDocumentOutline,
  IoCloseOutline,
} from 'react-icons/io5';

import ReactQuill, { Quill } from 'react-quill';

import dynamic from 'next/dynamic';

const ReactQuillBase = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');

    function QuillJS({ forwardedRef, ...props }: IWrappedComponent) {
      return <RQ ref={forwardedRef} {...props} />;
    }

    return QuillJS;
  },
  { ssr: false },
);

export default function PostForm() {
  const tabs = [
    { id: 0, title: '파일 불러오기' },
    { id: 1, title: '링크로 불러오기' },
    { id: 2, title: '썸네일 업로드' },
  ];

  const positions = [
    {
      id: 'top',
      value: 'top',
      content: '탑',
      svg: <Image alt="top" src={topSVG} />,
    },
    {
      id: 'mid',
      value: 'mid',
      content: '미드',
      svg: <Image alt="mid" src={midSVG} />,
    },
    {
      id: 'jungle',
      value: 'jungle',
      content: '정글',
      svg: <Image alt="jungle" src={jungleSVG} />,
    },
    {
      id: 'onedeal',
      value: 'onedeal',
      content: '원딜',
      svg: <Image alt="onedeal" src={onedealSVG} />,
    },
    {
      id: 'support',
      value: 'support',
      content: '서폿',
      svg: <Image alt="support" src={supportSVG} />,
    },
  ];

  const tiers = [
    { id: undefined, value: undefined, content: '티어 선택' },
    { id: 'unrank', value: 'unrank', content: '언랭' },
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

  const intialIngameInfos: IGameInfoProps[] = [
    { id: 0, position: '', champion: '', tier: '' },
    { id: 1, position: '', champion: '', tier: '' },
  ];

  //useState
  const [ingameInfos, setIngameInfos] =
    useState<IGameInfoProps[]>(intialIngameInfos);
  const [content, setContent] = useState('');
  const [hastags, setHashtags] = useState([]);
  const [champions, setChampions] = useState<string[]>(['챔피언 선택']);
  const [selectedPos, setSelectedPos] = useState<{ [key: number]: number }>({
    0: 0,
    1: 0,
  });
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const quillRef = useRef<ReactQuill>(null);
  const quillPlaceHolder =
    '[게시글 내용 작성 가이드]\n\n' +
    '1. 리플레이 영상 업로드는 필수! 판결을 받고 싶은 부분만 편집해 업로드 하기\n' +
    '- 파일 크기 제한 : 500MB\n' +
    '- 파일 형식: mp4\n' +
    "2. 게임 상황의 이해를 돕기 위해 '플레이 정보를 담은 전적 캡처 이미지'를 첨부하기\n" +
    '- 파일 크기 제한 : 2MB\n' +
    '- 파일 형식: jpg, jpeg, png\n' +
    '3. 상황 설명은 자세하게 글로 작성하기\n' +
    '- 문자 수 제한 : 1000자 이내\n';

  //useForm
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ICreatePostProps>();

  const onSubmit: SubmitHandler<ICreatePostProps> = (data) => {
    console.log(content);
  };

  //functions
  const changeTabTitleStyle = (index: number): string => {
    return selectedTab === index
      ? 'p-tab-title p-tab-selected'
      : 'p-tab-title p-tab-n-selected';
  };

  const changeTabContentStyle = (index: number): string => {
    return `p-tab-content ${selectedTab === index ? '' : 'hidden'}`;
  };

  const changePositionRadioStyle = (index: number, checked: boolean) => {
    return checked
      ? 'p-position p-position-selected'
      : 'p-position p-position-n-selected';
  };

  const addIngameInfo = (): void => {
    const newInfo = {
      id: ingameInfos.length,
      position: '',
      champion: '',
      tier: '',
    };
    setIngameInfos(ingameInfos.concat(newInfo));

    // Setting the default position for the newly added game info
    const updatedSelectedPos = {
      ...selectedPos,
      [newInfo.id]: 0, // Defaulting to the first position for the new entry
    };
    setSelectedPos(updatedSelectedPos);
  };

  const removeIngameInfo = (index: number): void => {
    setIngameInfos(ingameInfos.filter((_, idx) => idx !== index));
  };

  //useEffect
  useEffect(() => {
    console.log('postForm 렌더');

    fetch(
      'https://ddragon.leagueoflegends.com/cdn/14.9.1/data/ko_KR/champion.json',
    )
      .then((response) => response.json())
      .then((data: ChampionDataProps) => {
        const loadedChampions = Object.keys(data.data).map(
          (key) => data.data[key].name,
        );

        const sortedChampions = loadedChampions.sort(function (a, b) {
          return a.localeCompare(b);
        });

        setChampions((prev) => [...prev, ...sortedChampions]);
      })
      .catch((error) => console.error('Error loading the champions:', error));
  }, []);

  //useMemo
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [['image']],
      },
    };
  }, []);

  //tsx
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-content-pd p-content-rounded mb-[44px] h-fit w-full bg-[#ffffff]">
          <PostUploadDesc />
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
                  {tab.id === 0 ? (
                    <div className="flex flex-row items-center justify-center">
                      <IoDocumentOutline className="mr-[10px] text-[20px]" />
                      <div>파일을 끌어오거나 클릭 후 업로드 하세요</div>
                    </div>
                  ) : tab.id === 1 ? (
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
                  ) : tab.id === 2 ? (
                    <div className="flex flex-row items-center justify-center">
                      <IoDocumentOutline className="mr-[10px] text-[20px]" />
                      <div>파일을 끌어오거나 클릭 후 업로드 하세요</div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-content-pd p-content-rounded mb-[44px] h-fit w-full bg-[#ffffff]">
          <div className="p-content-mb mx-[30px] text-[20px] font-semibold text-[#8A1F21]">
            글 작성
          </div>
          <div className="p-content-mb p-font-color-default flex flex-row items-center justify-center">
            <div className="mx-[30px] text-[20px]">제목</div>
            <input
              type="text"
              maxLength={35}
              className=" grow rounded-[30px] border-[1.5px] border-[#828282] px-[30px] py-[15px] text-[22px]  outline-none"
              placeholder="최대 35글자 입력 가능합니다."
              {...register('title')}
            />
          </div>
          <div className="p-content-mb h-[882px] overflow-hidden  rounded-[30px] border-[1.5px] border-[#828282]">
            <ReactQuillBase
              forwardedRef={quillRef}
              modules={modules}
              className=" h-[100%] w-full whitespace-pre-wrap outline-none"
              value={content}
              onChange={setContent}
              placeholder={quillPlaceHolder}
            />
          </div>
          <div className="mx-[30px] mb-[30px] text-[20px] font-semibold text-[#8A1F21]">
            해시태그
          </div>
          <input
            type="text"
            className="mb-[30px] w-full rounded-[30px] border-[1.5px] border-[#828282] px-[30px] py-[10px] outline-none"
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
        </div>

        <div className="p-content-pd p-content-rounded mb-[44px] h-fit w-full bg-[#ffffff]">
          <div className="p-content-mb p-font-color-default flex flex-row items-end">
            <div className=" mr-[20px] text-[20px] font-semibold text-[#8A1F21]">
              판결 참여자 입력
            </div>
            <div className="text-[12px] text-[#8A1F21]">
              본인을 포함해 판결에 참여할 대상의 정보를 입력해주세요
            </div>
          </div>

          {ingameInfos.map((ingameInfo, index) => (
            <div key={index}>
              {index === 0 ? (
                <div className="flex flex-row justify-between">
                  <div className="mb-[15px] text-[12px] text-[#333333]">
                    본인의 챔피언, 포지션, 티어를 선택해주세요.
                  </div>
                </div>
              ) : index === 1 ? (
                <div className="flex flex-row justify-between">
                  <div className="mb-[15px] text-[12px] text-[#333333]">
                    상대의 챔피언, 포지션, 티어를 선택해주세요.
                  </div>
                  <hr />
                </div>
              ) : (
                ''
              )}

              <div className="mb-[20px] flex flex-col rounded-[30px] border-2 border-[#8A1F21] p-[20px]">
                <div className="flex w-[100%] items-center">
                  {positions.map((pos, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        name={`position-${ingameInfo.id}`}
                        id={`${pos.id}-${ingameInfo.id}`}
                        value={pos.value}
                        className="p-input-hidden"
                        onChange={() => {
                          const updatedSelectedPos = { ...selectedPos };
                          updatedSelectedPos[ingameInfo.id] = index;
                          setSelectedPos(updatedSelectedPos);
                        }}
                        checked={selectedPos[ingameInfo.id] === index}
                      />
                      <label
                        htmlFor={`${pos.id}-${ingameInfo.id}`}
                        className={changePositionRadioStyle(
                          index,
                          selectedPos[ingameInfo.id] === index,
                        )}
                      >
                        <div className="mr-1">{pos.svg}</div>
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
                  {ingameInfo.id === ingameInfos.length - 1 &&
                  ingameInfo.id > 1 ? (
                    <IoIosClose
                      onClick={() => removeIngameInfo(index)}
                      className="cursor-pointer text-[23px] text-[#8A1F21] "
                    />
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          ))}

          {ingameInfos.length < 5 && (
            <div
              onClick={addIngameInfo}
              className="flex cursor-pointer flex-row justify-center text-[50px] text-[#333333]"
            >
              <IoAddCircleOutline className="text-[#8A1F21]" />
            </div>
          )}

          <div className="flex flex-row justify-end">
            <button
              type="submit"
              className="flex flex-row items-center rounded-[50px] bg-[#8A1F21] px-[20px] py-[5px] text-[17px] text-white"
            >
              <IoSaveOutline className="mr-[5px]" />
              작성완료
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
