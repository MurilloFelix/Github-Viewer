import styled from "styled-components";

export const SearchContainer = styled.div`
  box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.25);
  position: relative;
  overflow: hidden;
  border-radius: 100px;
  min-width: 350px;
  @media only screen and (max-width: 600px){
    min-width: 85vw;
  } 
  `
export const SearchInput = styled.input`
  margin: 1.5% 3%;
  color: white;
  font-size: 1.2em; 
  background: none;
  border: none; 
  width: 85%;
  :focus{
    outline: none;
  }
`

export const SearchButton = styled.button`
  background: none;
  border: none; 
  position: absolute;
  cursor: pointer;
  color: white;
  top: 0;
  right: 5px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  img {
    height: 60%;
    transform: rotate(90deg);
  }
  :hover {
    img{
      height: 70%;
    }
  }
`