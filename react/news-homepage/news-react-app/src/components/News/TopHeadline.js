import "./TopHeadline.css";

const TopHeadline = (props) => {
  return (
    <article className="top-headline">
      <div className="top-headline__img">
        <img src={props.imageDesktop} />
      </div>
      <div className="top-headline__textbox">
        <h1 className="top-headline__title"></h1>
        <p className="top-headline-content"></p>
        <button className="read-more-btn">Read more</button>
      </div>
    </article>
  );
};

export default TopHeadline;
