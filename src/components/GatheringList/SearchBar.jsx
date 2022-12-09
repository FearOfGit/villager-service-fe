import { SearchBarBlock } from './SearchBar.style';

function SearchBar() {
  return (
    <SearchBarBlock>
      <input
        className="search-input"
        type="text"
        placeholder="태그를 입력해주세요!"
      />
    </SearchBarBlock>
  );
}

export default SearchBar;
