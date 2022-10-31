import logo from "../images/logo.svg";
function Nav() {
  return (
    <nav className="top-nav">
      <div className="top-nav__logo">
        <img src={logo} alt="News Logo" className="logo" />
      </div>
      <ul className="top-nav__wrapper">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Popular</li>
        <li>Categories</li>
      </ul>
    </nav>
  );
}

export default Nav;
