import { lazy } from "react";
const Overview = lazy(() => import("./adminPages/overview/index"));
const Members = lazy(() => import("./adminPages/members/index"));
const SingleMember = lazy(() => import("./adminPages/members/single"));
const Blog = lazy(() => import("./adminPages/blogs"));
const Faqs = lazy(() => import("./adminPages/faqs"));

export default [
  { name: "Overview", path: "/admin", component: Overview, exact: true },
  { name: "Members", path: "/admin/members", exact: true, component: Members },
  {
    name: "Members",
    path: "/admin/members/:id",
    exact: true,
    component: SingleMember,
  },
  { name: "Blog", path: "/admin/blog", exact: true, component: Blog },
  { name: "Faqs", path: "/admin/faqs", exact: true, component: Faqs },
];
