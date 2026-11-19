import { Outlet } from "react-router";

export const AdminLayout = () => {
  return (
    <div className="row bg-indigo-200 p-5">
      <Outlet />
    </div>
  );
};
