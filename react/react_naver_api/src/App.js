import React from "react";
import { useState } from "react";
import axios from "axios";
import Layout from "./Layout";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

const App = (params) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
};

export default App;
