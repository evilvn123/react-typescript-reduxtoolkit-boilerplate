import React, { ReactNode, VFC } from "react";

interface Props {
  meta: ReactNode;
  children: ReactNode;
}

const Main: VFC<Props> = ({ meta, children }: Props) => {
  return (
    <>
      {meta}
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
};

export { Main };
