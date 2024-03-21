import * as React from "react";
import Links from "../constants/links";
import Categories from "../components/Categories";
import { IoMdClose } from "react-icons/io";

interface ISideBar {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
}

export default function Sidebar({ setIsSidebarOpen, isSidebarOpen }: ISideBar) {
  return (
    <aside className={isSidebarOpen ? "sidebar showSidebar" : "sidebar"}>
      <button
        className="close-btn"
        type="button"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        <Links styleClass="sidebar-links">
          <Categories />
        </Links>
      </div>
    </aside>
  );
}
