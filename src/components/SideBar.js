// import React, { useState } from 'react';
// import SlidingPanel from 'react-sliding-side-panel';
import './SideBar.css'
import Budget from './Budget.js'
 
// const SideBar= () => {
//   const [openPanel, setOpenPanel] = useState(false);
//   return (
//     <section>
//         <div>
//             <button onClick={() => setOpenPanel(true)}>Budget</button>
//         </div>
//         <div id="sliding-panel">
//             <SlidingPanel
//                 type={'left'}
//                 isOpen={openPanel}
//                 size={40}
//             >
//                 <div id='panel-content'>
//                 <Budget/>
//                 <button onClick={() => setOpenPanel(false)}>close</button>
//                 </div>
//             </SlidingPanel>
//         </div>
//     </section>
//   );
// };
 
// export default SideBar;

import React from 'react';
import { slide as SideBar } from 'react-burger-menu';

export default props => {
  return (
    <SideBar>
      <Budget/>
    </SideBar>
  );
};