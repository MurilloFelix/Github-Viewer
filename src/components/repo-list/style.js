import styled from "styled-components";

export const RepoListContainer = styled.div`
  font-size: 1.2em;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.25);
  transition: .2s;
  height: 70vh;
  position: relative;
  width: 80vw;
  min-width: 500px;
  max-width: 90vw;
  overflow-y: auto;
  overflow-x: auto;
  @media only screen and (max-width: 700px){
    min-width: 93vw;
    height: 80vh;
  }
  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  ::-webkit-scrollbar-track {
    background: none; 
  }
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

`
export const NoUserText = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  color: white;
  text-align: center;
`

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 30%;
  }
`
