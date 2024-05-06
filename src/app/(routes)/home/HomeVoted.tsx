import PostVotingChampList from '../post/PostVotingChampList';
import PostVotingGraph from '../post/PostVotingGraph';

export default function HomeVoted() {
  return (
    <>
      <div className="h-[137px] rounded-[30px]">
        <div className="flex flex-row items-center p-[25px] text-[10px]  ">
          <PostVotingChampList />
          <PostVotingGraph />
        </div>
      </div>
    </>
  );
}
