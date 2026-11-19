import { Link, Outlet } from "react-router";

export const HeroesLayout = () => {
  return (
    <div>
      <ul className="row bg-amber-200 p-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hero/1">Heroes</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
      <div className="mt-5">
        <Outlet />
      </div>
    </div>
  );
};
