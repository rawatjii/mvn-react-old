import React, { StrictMode, Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

import Layout from "./frontend/components/Layout.jsx";
const Homepage = React.lazy(() => import("./frontend/pages/Homepage.jsx"));
const AboutUs = React.lazy(() => import("./frontend/pages/AboutUs.jsx"));
const MicroPage = React.lazy(() => import("./frontend/pages/Micro.jsx"));
const AeroOneGurgaon = React.lazy(() => import("./frontend/pages/micro/mvn-aeroone-gurgaon/Index.jsx"));
const AeroOneGurgaon1 = React.lazy(() => import("./frontend/pages/micro/mvn-aeroone-gurgaon1/Index.jsx"));
const Athens = React.lazy(() => import("./frontend/pages/micro/Athens/Index.jsx"));
const ContactPage = React.lazy(() => import("./frontend/pages/ContactUs.jsx"));
const ThankYou = React.lazy(() => import("./frontend/pages/ThankYou.jsx"));

// admin

import AdminLayout from "./admin/Layout.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import Login from "./admin/Login.jsx";
import JobApplications from "./admin/JobApplications.jsx";
import ContactQuery from "./admin/ContactQuery.jsx";
import ContactUs from "./admin/Contactus.jsx";
import Blogs from "./admin/Blogs/Index.jsx";
import InitialLoading from "./frontend/skeleton/Initial/Index.jsx";

import PageNotFound from "./common/PageNotFound/Index.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";


import AeroOneBangalore from "./frontend/pages/micro/mvn-aeroone-bangalore/Index.jsx";
import Career from "./frontend/pages/Career.jsx";

import "./awaneesh.css";
import MediaCenter from "./frontend/pages/MediaCenter.jsx";

import "./savan.css";
import Blog from "./frontend/pages/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    // element:<Layout />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <Homepage />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <AboutUs />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "aeroone-gurgaon",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <AeroOneGurgaon />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "aeroone-gurgaon1",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <AeroOneGurgaon1 />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "aeroone-bangalore",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <AeroOneBangalore />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "athens",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <Athens />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "micro",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <MicroPage />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "contact-us",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <ContactPage />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "career",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <Career />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "thanks",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <ThankYou />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "media-center",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <MediaCenter />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "blogs",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <Blog />
            </Layout>
          </Suspense>
        ),
      },

      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "job-application",
        element: <JobApplications />,
      },
      {
        path: "contact-query",
        element: <ContactQuery />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
