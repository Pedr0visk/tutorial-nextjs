
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
  Container, 
  Nav, 
  TabContent 
} from './styles'

import Tab from '../Tab'


const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    setActiveTab(children[0].props.label)
  }, [children])
  
  return (
    <Container>
      <Nav>
        {children.map(child => {
          const {label} = child.props 
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClickHandler={setActiveTab}
            />
          )
        })}
      </Nav>
      <TabContent>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </TabContent>
    </Container>
  )
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
}

export default Tabs


