import { PostReturnBtnProps } from '../types/types';

export default function PostReturnBtn({
  children,
}: PostReturnBtnProps): JSX.Element {
  return (
    <button className=" box-content flex h-[34px] w-[92px] items-center justify-center rounded-[150px] bg-[#8A1F21]  text-white hover:bg-red-800">
      <div className="text-[13px]">{children}</div>
    </button>
  );
}
