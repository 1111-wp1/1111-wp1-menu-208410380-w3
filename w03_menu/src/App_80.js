import { useState } from 'react';
import Menu_80 from './components/Menu_80';
import items from './data';

const App_80 = () => {
  const [menuItems, setMenuItems] = useState(items);
  
  // console.log('menuItems', menuItems);
  return (
    <section class="menu">
    {/* title */}
    <div class="title">
      <h2>our menu</h2>
      <div class="underline"></div>
    </div>
    {/* filter buttons */}
    <div className="btn-container">
    <button type="button" className="filter-btn" data-id="all">all</button>
    <button type="button" className="filter-btn" data-id="breakfast">
          breakfast
        </button>
    <button type="button" className="filter-btn" data-id="lunch">lunch</button>
    <button type="button" className="filter-btn" data-id="shakes">
          shakes
        </button>
    <button type="button" class="filter-btn" data-id="dinner">
          dinner
        </button>
    </div>
    {/*menu items*/}
   <Menu_80 items={menuItems}/>
      
       {/* javascript */}
    <script src="app.js"></script>
    </section>
  );
}

export default App_80;
