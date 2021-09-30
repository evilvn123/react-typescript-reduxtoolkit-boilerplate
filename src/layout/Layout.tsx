import React, { ReactNode, VFC } from "react";
import Header from "src/components/Header";

interface Props {
  children: ReactNode;
}

const Layout: VFC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
