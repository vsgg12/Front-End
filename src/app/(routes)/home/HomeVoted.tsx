import PostVotingChampList from '../post/PostVotingChampList';
import PostVotingGraph from '../post/PostVotingGraph';

export default function HomeVoted() {
  return (
    <>
      <div className="h-[8.563rem] rounded-[1.875rem]">
        <div className="flex flex-row items-center p-[1.563rem] text-[0.625rem]  ">
          <PostVotingChampList />
          <PostVotingGraph />
        </div>
      </div>
    </>
  );
}
