import { useState } from 'react';
import RepoList from './components/repo-list';
import Search from './components/search';
import { MainContainer } from './style';

function App() {
  const [searchUser, setSearchUser] = useState('')
  return (
    <MainContainer>
      <Search OnSearch={(value) => { setSearchUser(value) }} />
      <RepoList User={searchUser} />
    </MainContainer>
  );
}

export default App;
