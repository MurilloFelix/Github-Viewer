import { useState } from "react";
import { SearchButton, SearchContainer, SearchInput } from "./style";

const Search = (props) => {
  const [value, setValue] = useState('')

  function onChange(e) {
    setValue(e.target.value)
  }

  function searchClick() {
    if (!!props.OnSearch) {
      props.OnSearch(value)
    }
  }

  function keypress(event) {
    if (event.key === 'Enter') {
      searchClick()
    }
  }

  return (
    <SearchContainer>
      <SearchInput type="text" value={value} onChange={onChange} onKeyUp={keypress} />
      <SearchButton onClick={searchClick}><img src="./assets/lupa.png" alt="" /></SearchButton>
    </SearchContainer>
  )
}

export default Search