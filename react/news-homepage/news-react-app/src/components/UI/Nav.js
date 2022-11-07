import "./Nav.css";

const Nav = (props) => {
  const classes = `nav ${props.className}`;
  return <div className={classes}>props.children</div>;
};

export default Nav;
