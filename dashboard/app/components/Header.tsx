"use client";
import NavBarContent from "./NavBarContent";
import SideBarContent from "./SideBarContent";
import { ContentType } from "../utils/utilsTypes";

export default function Header({ contentType }: { contentType: ContentType }) {
  return (
    <div className="drawer">
      <input id="header-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {" "}
        {/* Begin page content */}
        <NavBarContent contentType={contentType} />
      </div>{" "}
      {/* End page content */}
      <div className="drawer-side">
        {" "}
        {/* Begin drawer side */}
        <label
          htmlFor="header-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        {/* Sidebar content here */}
        <SideBarContent contentType={contentType} />
      </div>
    </div>
  );
}
