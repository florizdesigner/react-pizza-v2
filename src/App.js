import React from "react";

import Header from "./components/Header";

import styles from "./App.module.scss";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <Routes>
          <Route
            path="/"
            element={
              <Home searchValue={searchValue} setSearchValue={setSearchValue} />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
