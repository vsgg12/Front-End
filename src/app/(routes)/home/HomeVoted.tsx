import PostVotingChampList from '../post/PostVotingChampList';
import PostVotingGraph from '../post/PostVotingGraph';

export default function HomeVoted() {
  return (
    <>
      <div className="h-[8.563rm] rounded-[1.875em]">
        <div className="r flex flex-row items-center p-[1.563em] text-[0.625em]">
          <PostVotingChampList />
          <PostVotingGraph />
        </div>
      </div>
    </>
  );
}
