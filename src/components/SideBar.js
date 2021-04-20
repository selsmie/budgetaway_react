import './SideBar.css'
import BudgetContainer from '../containers/BudgetContainer.js'
 

import React from 'react';
import { slide as SideBar } from 'react-burger-menu';

export default props => {
  return (
    <SideBar>
      <BudgetContainer/>
    </SideBar>
  );
};