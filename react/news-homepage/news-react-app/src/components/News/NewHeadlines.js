import "./NewHeadlines.css";

const NewHeadlines = () => {
  return (
    <div className="new-headlines">
      <h2 className="new-headlines__title">New</h2>
      <div className="new-headlines__wrapper">
        <div className="new-headlines__container">
          <p className="new-headlines__heading">Hydrogen VS Electric cars</p>
          <p className="new-headlines__description">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div className="new-headlines__container">
          <p className="new-headlines__heading">The downsides of AI artistry</p>
          <p className="new-headlines__description">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className="new-headlines__container">
          <p className="new-headlines__heading">Is VC funding drying up?</p>
          <p className="new-headlines__description">
            Private fundings by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewHeadlines;
