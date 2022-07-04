import React, { useState } from "react"
import { FolderListContainer, FolderListItemArrow, FolderListItemContainer, FolderListItemError, FolderListItemName } from "./style"

const FolderList = ({ children }) => {
  const [openedId, setOpenedId] = useState('')
  return (
    <FolderListContainer>
      {children ? React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { Id: String(index), OpenedId: openedId, SetOpenedId: setOpenedId })
        }
      }) : ''}
    </FolderListContainer>
  )
}

FolderList.Item = ({ children, Name, OnClick, Id, OpenedId, SetOpenedId, loading }) => {
  const isOpened = !!String(OpenedId).startsWith(Id)
  function click() {
    if (!!children) {
      if (Id === OpenedId || !!String(OpenedId).startsWith(Id)) {
        SetOpenedId(Id.substring(0, Id.lastIndexOf('.')))
      } else {
        SetOpenedId(Id)
      }
    }
    if (!!OnClick) {
      OnClick({ name: Name, id: Id })
    }
  }

  return (
    <FolderListItemContainer Open={isOpened}>
      {children && <FolderListItemArrow onClick={click} src={loading ? "./assets/Spinner-1s-200px.svg" : "./assets/arrow.png"} Open={isOpened} />}
      <FolderListItemName onClick={click}>{Name}</FolderListItemName>
      {isOpened && children ? React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            Id: Id + '.' + index, OpenedId: OpenedId, SetOpenedId: SetOpenedId
          })
        }
      }) : ''}
    </FolderListItemContainer>
  )
}

FolderList.Error = ({ Error }) => {
  return (
    <FolderListItemContainer>
      <FolderListItemError>{Error}</FolderListItemError>
    </FolderListItemContainer>
  )
}


export default FolderList