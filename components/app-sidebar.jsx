"use client"

import * as React from "react"
import {
  ArrowDownToLine,
  ChartNoAxesCombined,
  CircleDollarSign,
  Command,
  CreditCard,
  Gem,
  HandCoins,
  IdCard,
  Landmark,
  LayoutDashboard,
  LifeBuoy,
  Send,
  SquareMenu,
  TvMinimal,
  Users,
  Wallet,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


const data = {
  navMain: [
   
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      url: "/cafestore/cafeonitsha",
      isActive: true,
    },
    {
      title: "Book Reservation",
      icon: SquareMenu,
      url: "/cafestore/reservations",
    },
    {
      title: "Book Order",
      icon: SquareMenu,
      url: "/cafestore/order",
    },
    {
      title: "Favourites",
      icon: Gem,
      url: "/dashboard/favourites",
    },
  ],
  navSecondary: [
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],

}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div
                  className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Jela's Café</span>
                  <span className="truncate text-xs">Confectionary</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser  />
      </SidebarFooter>
    </Sidebar>)
  );
}
