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

  useEffect(() => {
    // Focus the button when the component mounts
    firstBtnRef.current?.focus();
  }, []);

  const changeTabTitleStyle = (index: number) => {
    return `h-[77px] w-[136px] rounded-t-[20px] border-collapse border-b-[#ffffff] ${
      selectedTab === index
        ? 'border-[1.5px] border-[#828282] text-[#8A1F21]'
        : ''
    }`;
  };

  const changeTabContentStyle = (index: number) => {
    return `absolute top-[76px] text-[16px] text-[#828282] z-1 w-[100%] border-[1.5px]  border-[#828282] rounded-[30px] py-[20px] px-[30px] ${selectedTab === index ? '' : 'hidden'}`;
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
