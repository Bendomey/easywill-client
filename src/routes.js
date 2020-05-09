import { lazy } from "react";
const DashboardComponent = lazy(() => import("./pages/dashboard/index"));
const BiographyComponent = lazy(() => import("./pages/biography/index"));
const AssetsComponent = lazy(() => import("./pages/assets/index"));
const BeneficiariesComponent = lazy(() => import("./pages/beneficiary/index"));
const ExecutorComponent = lazy(() => import("./pages/executor/index"));
const AssetDistributionComponent = lazy(() =>
  import("./pages/distributor/index")
);

export default [
  { path: "/", name: "Overview", component: DashboardComponent, exact: true },
  {
    path: "/biography",
    name: "Biography",
    component: BiographyComponent,
    exact: true,
  },
  {
    path: "/assets",
    name: "Assets",
    component: AssetsComponent,
    exact: true,
  },
  {
    path: "/beneficiaries",
    name: "Beneficiaries",
    component: BeneficiariesComponent,
    exact: true,
  },
  {
    path: "/executor",
    name: "Executor",
    component: ExecutorComponent,
    exact: true,
  },
  {
    path: "/asset_distribution",
    name: "Asset Distribution",
    component: AssetDistributionComponent,
    exact: true,
  },
];
