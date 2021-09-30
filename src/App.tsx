import React, { Suspense } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import { routes as rous } from "src/configs/routes";
import "src/styles/global.scss";
import Pets from "./features/pet/pages";
import Layout from "./layout/Layout";

const App: React.VFC = () => {
  const routing = useRoutes(rous);
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Layout>
        <Routes>
          <Route path="/" element={<Pets />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default App;
