import React from "react";
import Header from "./components/Header";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: IProps) => {
  return (
    <div className="h-full">
      <Header />

      <main className="mt-10">{children}</main>
    </div>
  );
};

export default Layout;
