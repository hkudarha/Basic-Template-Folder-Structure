import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AuthRoutes,
  AuthenticatedRoutes,
  UnauthenticatedRoutes,
} from "./constants/router";
import Layout from "./components/website/Layout";
import Home from "./components/website/Home";
import About from "./components/website/About";
import Contact from "./components/website/Contact";
import ProtectedRoute from "./constants/ProtectedRoute";
import ProductDetail from "./components/website/product/ProductDetail";
import ScrollToTop from "./constants/ScrollToTop";

const RouterPage = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          {/* Public Website Routes */}
          <Route path={UnauthenticatedRoutes.HOME} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={UnauthenticatedRoutes.ABOUT} element={<About />} />
            <Route path={UnauthenticatedRoutes.CONTACT} element={<Contact />} />
            <Route
              path={UnauthenticatedRoutes.PRODUCT_DETAIL}
              element={<ProductDetail />}
            />
          </Route>

          {/* Auth Routes */}

          {/* <Route path={AuthRoutes.LOGIN} element={<Login />} />
        <Route path={AuthRoutes.REGISTER} element={<Register />} /> */}

          {/* Protected Dashboard */}

          {/* <Route
          path={AuthenticatedRoutes.DASHBOARD}
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default RouterPage;
