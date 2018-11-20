import * as React from "react";
import { NavBar } from "./Navbar";

export const Layout = (props: any) => {
  return (
    <div className="container-fluid">
      <NavBar />
      <div className="body-container">{props.children}</div>
    </div>
  );
};
