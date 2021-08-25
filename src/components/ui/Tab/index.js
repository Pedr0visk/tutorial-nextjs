import React from 'react'
import { TabItem } from './styles'

const Tab = ({ activeTab, label, onClickHandler }) => {
  return (
    <TabItem active={activeTab === label ? 1 : 0} onClick={e => onClickHandler(label)}>
      {label}
    </TabItem>
  )
}

export default Tab
