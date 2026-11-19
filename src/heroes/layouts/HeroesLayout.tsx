import { Outlet } from "react-router";

export const HeroesLayout = () => {
  return (
    <div className="row bg-amber-200 p-5">
      <Outlet />
    </div>
  );
};
