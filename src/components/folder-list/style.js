import styled from "styled-components";

export const FolderListContainer = styled.div`
  height: 100%;
`

export const FolderListItemContainer = styled.div`
  font-size: .99em;
  padding: 5px 0px 5px 10px;
  overflow: hidden;
  color: white;
  transition:  .3s;
  min-width: calc(90% - 7px);
  ${props => props.Open && 'max-height: max-content; transition: 1s;'}
`

export const FolderListItemName = styled.span`
  cursor: pointer;
  word-wrap:  break-word
`

export const FolderListItemError = styled.span`
  word-wrap:  break-word;
  color: #ff0f0f;
`

export const FolderListItemArrow = styled.img`
  cursor: pointer;
  height: .8em;
  margin-right: 5px;
  transition: .5s;
  ${props => props.Open && 'transform: rotate(90deg)'}
`