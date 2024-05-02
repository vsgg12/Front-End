'use client';
import { useState, useEffect, useRef } from 'react';
import { IoVideocamOutline } from 'react-icons/io5';
import { IoLinkOutline } from 'react-icons/io5';
import { IoEaselOutline } from 'react-icons/io5';

// Define the type for the item structure
type PostVidUploadItem = {
  title: string;
  content: JSX.Element;
};

// Define the props type for the component
interface PostVidUploadTabProps {
  items: PostVidUploadItem[];
}

export default function PostVidUploadTab({ items }: PostVidUploadTabProps) {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const firstBtnRef = useRef<HTMLButtonElement>(null);

  //CSS에 따로 정의해놓고 클래스 명만 가져오는 방법으로 바꾸기.
  const changeTabTitleStyle = (index: number) => {
    if (selectedTab === index) {
      console.log(selectedTab === index);
      return 'p-tab-title p-tab-selected';
    } else {
      return 'p-tab-title p-tab-n-selected ';
    }
  };

  const changeTabContentStyle = (index: number) => {
    return `p-tab-content ${selectedTab === index ? '' : 'hidden'}`;
  };

  return (
    <>
      <div className="relative">
        <div className="absolute z-10 ml-[30px] ">
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={changeTabTitleStyle(index)}
            >
              <div className="flex  flex-col items-center justify-center">
                <div className="text-[30px]">
                  {index === 0 ? (
                    <IoVideocamOutline />
                  ) : index === 1 ? (
                    <IoLinkOutline />
                  ) : index === 2 ? (
                    <IoEaselOutline />
                  ) : null}
                </div>
                <div className="">{item.title}</div>
              </div>
            </button>
          ))}
        </div>
        <div>
          {items.map((item, index) => (
            <div key={index} className={changeTabContentStyle(index)}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
