import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";

export default function Layouts() {
  return (
    <div className="flex gap-10 w-full min-h-screen bg-slate-950 px-5 py-5">
      <Sidebar />
      <div className="flex flex-col gap-5 flex-1">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
