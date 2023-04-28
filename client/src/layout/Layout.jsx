import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "../components";

const Layout = () => {
  return (
    <>
      <ToastContainer />
      <div>
        <Header />
        <main className="w-full min-h-[calc(100vh-69px)] sm:p-8 px-4 py-8 bg-violet-50">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
