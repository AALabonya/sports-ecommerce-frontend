import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
