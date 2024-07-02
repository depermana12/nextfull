import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <aside className="mr-5 bg-slate-200 p-5">Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  );
};
export default AdminLayout;
