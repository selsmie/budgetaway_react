import React, { useState } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import './SideBar.css'
import Budget from './Budget.js'
 
const SideBar= () => {
  const [openPanel, setOpenPanel] = useState(false);
  return (
    <section>
      <div>
        <button onClick={() => setOpenPanel(true)}>Budget</button>
      </div>
      <SlidingPanel
        id='sidebar'
        type={'left'}
        isOpen={openPanel}
        size={20}
      >
        <div id='panel-content'>
            <Budget/>
            <button onClick={() => setOpenPanel(false)}>close</button>
        </div>
      </SlidingPanel>
    </section>
  );
};
 
export default SideBar;