import React from "react";
import { Route, Routes } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import Home from "../pages/Home";
import Add from "../pages/Add";
import Wishlist from "../pages/Wishlist";
import Detail from "../pages/Detail";
import { Toaster } from 'react-hot-toast';
import Basket from "../pages/Basket";

const Layout = () => {
  return (
    <StyledWrapper>
      <Header />
      <StyledContent>
        <Routes>
          <Route path="*" element={<p>Not Found</p>} />
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </StyledContent>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  margin-top: 80px;
`;
const StyledContent = styled.div`
  min-height: 100vh;
`;

export default Layout;
