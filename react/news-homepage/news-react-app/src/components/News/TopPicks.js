import "./TopPicks.css";

const TopPicks = () => {
  return (
    <div className="top-picks">
      <div className="top-picks__wrapper">
        <div className="top-pick__img"></div>
        <div className="top-pick__textbox">
          <p className="top-pick__num">01</p>
          <p className="top-pick__title">Reviving Retro PCs</p>
          <p className="top-pick__content">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="top-picks__wrapper">
        <p className="top-pick__num">02</p>
        <p className="top-pick__title">Top 10 Laptops of 2022</p>
        <p className="top-pick__content">
          Our best picks for various needs and budgets.
        </p>
      </div>
      <div className="top-picks__wrapper">
        <p className="top-pick__num">03</p>
        <p className="top-pick__title">The Growth of Gaming</p>
        <p className="top-pick__content">
          How the pandemic has sparked fresh opportunities.
        </p>
      </div>
    </div>
  );
};

export default TopPicks;
