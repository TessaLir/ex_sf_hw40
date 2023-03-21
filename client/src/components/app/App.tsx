import React from "react";

import AppFooter from "./app-footer/app-footer";
import AppHeader from "./app-header/app-header";

import styleClass from "./App.module.css";

function App() {
  return (
    <>
      <AppHeader />
      <h3 className={styleClass["App"]} >Content</h3>
      <AppFooter />
    </>
  );
}

export default App;
