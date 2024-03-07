import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Context/useAuth";

const App = () => {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Outlet />
        <ToastContainer />
      </UserProvider>
    </>
  );
};

export default App;
