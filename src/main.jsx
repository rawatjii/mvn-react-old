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
import MediaCenter from "./frontend/pages/MediaCenter.jsx";
import Blog from "./frontend/pages/Blog.jsx"; 
import MvnMallGurgaon from "./frontend/pages/MvnMallGurgaon.jsx";
import MvnAthensSohna from "./frontend/pages/MvnAthensSohna.jsx";
import MvnAthensPh2Sohna from "./frontend/pages/MvnAthensPh2Sohna.jsx";
import MvnAthensFaridabad from "./frontend/pages/MvnAthensFaridabad.jsx";
import MvnUniversityHaryana from "./frontend/pages/MvnUniversityHaryana.jsx";
import Gallery from './frontend/pages/Gallery.jsx'
import Csr from './frontend/pages/Csr.jsx'
import PrPolcy from './frontend/pages/PrPolcy.jsx';
import Disclaimer from "./frontend/pages/Disclaimer.jsx";


import "./awaneesh.css";

import "./savan.css";
import './adarsh.css'

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
        path: "mvn-mall-gurgaon",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <MvnMallGurgaon />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "mvn-athens-sohna",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <MvnAthensSohna />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "mvn-athens-ph2-sohna",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <MvnAthensPh2Sohna />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "mvn-athens-faridabad",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <MvnAthensFaridabad />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "mvn-university-haryana",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <MvnUniversityHaryana />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "gallery",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <Gallery />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "csr",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <Csr />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "privacy-policy",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <PrPolcy />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "disclaimer",
        element: (
          <Suspense fallback={<InitialLoading />}>
            <Layout>
              <Disclaimer />
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
