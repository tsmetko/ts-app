import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";


const pages = [
  { id: 1, title: "Home", link: "/" }, 
  { id: 2, title: "Pag1", link: "/page1" }, 
  { id: 3, title: "Pag2", link: "/page2" },
  { id: 4, title: "Pag3", link: "/page3" },
  { id: 5, title: "Pag4", link: "/page4" },
  { id: 6, title: "Pag5", link: "/page5" },
  { id: 7, title: "Pag6", link: "/page6" },
  { id: 8, title: "Pag7", link: "/page7" },
]

const Layout = () => {
  return (
    <>
      <Navigation pages={pages} />
      <Outlet />
    </>
  );
}

export default Layout;