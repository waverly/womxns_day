import Link from "next/link";
import NavStyles from "./styles/NavStyles";

const Nav = () => (
  <NavStyles>
    <Link href="/addname">
      <a>Add a name</a>
    </Link>
    <Link href="/">
      <a>About</a>
    </Link>
  </NavStyles>
);

export default Nav;
