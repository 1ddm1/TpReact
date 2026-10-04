import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="App-Layout">
        <Navbar />
      <main><Outlet/></main>
      <Footer />
    </div>
  );
}
export default Layout;