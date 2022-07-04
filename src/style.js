import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center ;
  flex-direction: column;
  background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  
  background: linear-gradient(to right, #2C5364, #203A43, #0F2027); 
  width: 100vw;
  height: 100vh;
  @media only screen and (max-width: 600px){
    font-size: .9rem;
  } 
` 