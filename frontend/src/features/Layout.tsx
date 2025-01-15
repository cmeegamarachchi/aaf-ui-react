import React from "react";
import { BreadCrumbItem } from "@/components/SideNav/model";
import SideNav from "@/components/SideNav";
import { getDefaultSideNavConfig } from "@/components/SideNav/default-side-nav-configuration";

interface LayoutProps {
  children: React.ReactNode;
  titleToActivate: string;
  breadcrumbs: BreadCrumbItem[];
}

const Layout: React.FC<LayoutProps> = ({ children, titleToActivate, breadcrumbs }) => {
  const sideNavConfig = getDefaultSideNavConfig();

  sideNavConfig.navMain.map((item) => {
    item.isActive = false;
    if (item.title === titleToActivate) {
      item.isActive = true;
    }
    return item;
  });

  const _sideNavConfig = {
    ...sideNavConfig,
    breadCrumbs: breadcrumbs,
  };

  return <SideNav data={_sideNavConfig}>{children}</SideNav>;
};

export default Layout;
