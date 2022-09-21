import './App_80.css';


const App_80 = () => {
  return (
    <body>
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
    <div className="section-center">
    <article className="menu-item">
          <img src="/images/item-1.jpeg" alt="menu item" className="photo" />
          <div className="item-info">
            <header>
              <h4>buttermilk pancakes</h4>
              <h4 className="price">$15</h4>
            </header>
            <p className="item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
              laboriosam excepturi! Quo, officia.
            </p>
          </div>
        </article>
    <article className="menu-item">
          <img src="/images/item-2.jpeg" alt="menu item" className="photo" />
          <div className="item-info">
            <header>
              <h4>buttermilk pancakes</h4>
              <h4 className="price">$15</h4>
            </header>
            <p className="item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
              laboriosam excepturi! Quo, officia.
            </p>
          </div>
        </article>
        <article className="menu-item">
          <img src="/images/item-3.jpeg" alt="menu item" className="photo" />
          <div className="item-info">
            <header>
              <h4>buttermilk pancakes</h4>
              <h4 className="price">$15</h4>
            </header>
            <p className="item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
              laboriosam excepturi! Quo, officia.
            </p>
          </div>
        </article>
      </div>
       {/* javascript */}
    <script src="app.js"></script>
    </section>
      </body>
  )
}

export default App_80;
