"use client";

import {
  ArrowLeftRight,
  AudioWaveform,
  ChartBarBig,
  Command,
  DollarSign,
  GalleryVerticalEnd,
  House,
  Package,
  ReceiptText,
  Settings2,
  Users,
  Wallet,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProducts } from "@/components/nav-products";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "jmartinn",
    email: "jmartinn@hotmail.com",
    avatar: "https://github.com/jmartinn.png",
  },
  businesses: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navProducts: [
    {
      title: "Payments",
      url: "#",
      icon: Wallet,
      isActive: true,
      items: [
        {
          title: "Analytics",
          url: "#",
        },
        {
          title: "Disputes",
          url: "#",
        },
        {
          title: "Radar",
          url: "#",
        },
        {
          title: "Payment Links",
          url: "#",
        },
        {
          title: "Terminal",
          url: "#",
        },
      ],
    },
    {
      title: "Billing",
      url: "#",
      icon: ReceiptText,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Subscriptions",
          url: "#",
        },
        {
          title: "Invoices",
          url: "#",
        },
        {
          title: "Meters",
          url: "#",
        },
        {
          title: "Revenue Recovery",
          url: "#",
        },
      ],
    },
    {
      title: "Reporting",
      url: "#",
      icon: ChartBarBig,
      items: [
        {
          title: "Reports",
          url: "#",
        },
        {
          title: "Sigma",
          url: "#",
        },
        {
          title: "Revenue Cognition",
          url: "#",
        },
        {
          title: "Data Management",
          url: "#",
        },
      ],
    },
    {
      title: "More",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Tax",
          url: "#",
        },
        {
          title: "Connect",
          url: "#",
        },
        {
          title: "Identity",
          url: "#",
        },
        {
          title: "Atlas",
          url: "#",
        },
      ],
    },
  ],
  navItems: [
    {
      name: "Home",
      url: "#",
      icon: House,
    },
    {
      name: "Balances",
      url: "#",
      icon: DollarSign,
    },
    {
      name: "Transactions",
      url: "#",
      icon: ArrowLeftRight,
    },
    {
      name: "Customers",
      url: "#",
      icon: Users,
    },
    {
      name: "Products",
      url: "#",
      icon: Package,
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
        <NavMain items={data.navItems} />
        <NavProducts items={data.navProducts} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
