import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar-primary text-white mb-4">
      <div className="container">
        <h2 className="site-title">Octane CSS</h2>
        <Link href="/demopage">Demo page</Link>
        <p>A very lightweight CSS library</p>
      </div>
    </nav>
  );
};
export default Navbar;
