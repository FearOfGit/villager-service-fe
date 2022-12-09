import { GatheringListTemplate } from './index.style';
import RegisterButton from './RegisterButton';
import SearchBar from './SearchBar';
import List from './List';

function GatheringList() {
  return (
    <GatheringListTemplate>
      <SearchBar />
      <RegisterButton />
      <List />
    </GatheringListTemplate>
  );
}

export default GatheringList;
