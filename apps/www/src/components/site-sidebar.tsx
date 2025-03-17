// site-sidebar.tsx (Updated to use the new components)
"use client";

import {
  ArrowDownUp,
  BarChart2,
  BookOpen,
  Code,
  Cpu,
  Home,
  Layers,
  Package,
  PanelLeft,
  Receipt,
  Shield,
  Store,
  Wallet,
  Zap,
} from "lucide-react";
import * as React from "react";

import { DeveloperNav } from "@/components/nav-developer";
import { MainNav } from "@/components/nav-main";
import { PaymentsNav } from "@/components/nav-payments";
import { UserNav } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Juan Pedro Martin",
    email: "panic@thedisco.com",
    avatar: "https://github.com/jmartinn.png",
    apiKey: "sk_test_*****Kj9E3B",
  },
  businesses: [
    {
      name: "Strapex",
      logo: Layers,
      plan: "Developer",
    },
    {
      name: "Test Account",
      logo: Code,
      plan: "Sandbox",
    },
  ],
  navOverview: [
    {
      name: "Dashboard",
      url: "#",
      icon: Home,
    },
    {
      name: "Analytics",
      url: "#",
      icon: BarChart2,
    },
    {
      name: "Network Status",
      url: "#",
      icon: Cpu,
    },
    {
      name: "Merchants",
      url: "#",
      icon: Store,
    },
  ],
  navPayments: [
    {
      title: "Transactions",
      url: "#",
      icon: ArrowDownUp,
      isActive: true,
      hasChildren: true,
      items: [
        {
          title: "All Transactions",
          url: "#",
        },
        {
          title: "Pending",
          url: "#",
        },
        {
          title: "Completed",
          url: "#",
        },
        {
          title: "Failed",
          url: "#",
        },
      ],
    },
    {
      title: "Invoices",
      url: "#",
      icon: Receipt,
      hasChildren: true,
      items: [
        {
          title: "All Invoices",
          url: "#",
        },
        {
          title: "Create Invoice",
          url: "#",
        },
        {
          title: "Templates",
          url: "#",
        },
      ],
    },
    {
      title: "Settlement",
      url: "#",
      icon: Wallet,
      hasChildren: false,
    },
    {
      title: "Fee Management",
      url: "#",
      icon: Zap,
      hasChildren: false,
    },
  ],
  navDeveloper: [
    {
      title: "SDK",
      url: "#",
      icon: Package,
      hasChildren: true,
      items: [
        {
          title: "Getting Started",
          url: "#",
        },
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Examples",
          url: "#",
        },
      ],
    },
    {
      title: "API Keys",
      url: "#",
      icon: Code,
      hasChildren: false,
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      hasChildren: true,
      items: [
        {
          title: "API Reference",
          url: "#",
        },
        {
          title: "Guides",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
      ],
    },
    {
      title: "Webhooks",
      url: "#",
      icon: PanelLeft,
      hasChildren: false,
    },
    {
      title: "Security",
      url: "#",
      icon: Shield,
      hasChildren: false,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.businesses} />
      </SidebarHeader>
      <SidebarContent>
        <MainNav items={data.navOverview} />
        <PaymentsNav items={data.navPayments} />
        <DeveloperNav items={data.navDeveloper} />
      </SidebarContent>
      <SidebarFooter>
        <UserNav user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
