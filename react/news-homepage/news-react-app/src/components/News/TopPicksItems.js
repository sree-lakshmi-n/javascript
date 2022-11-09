const TopPicksItems = (props) => {
  return (
    <div className="top-picks__wrapper">
      <div className="top-pick__img">
        {/* <img src={require(props.img)} /> */}
      </div>
      <div className="top-pick__textbox">
        <p className="top-pick__num">01</p>
        <p className="top-pick__title">Reviving Retro PCs</p>
        <p className="top-pick__content">
          What happens when old PCs are given modern upgrades?
        </p>
      </div>
    </div>
  );
};

export default TopPicksItems;
