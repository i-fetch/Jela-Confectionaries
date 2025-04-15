"use client"

import * as React from "react"
import {
  Command,
  Gem,
  LayoutDashboard,
  Send,
  SquareMenu,
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
      title: "Special Menu",
      icon: SquareMenu,
      url: "/cafestore/cafeonitsha/menu",
    },
    {
      title: "Orders",
      icon: SquareMenu,
      url: "/cafestore/cafeonitsha/orders",
    },
    {
      title: "Reservations",
      icon: SquareMenu,
      url: "/cafestore/cafeonitsha/reservations",
    },
    {
      title: "Favourites",
      icon: Gem,
      url: "/dashboard/cafeonitsha/favourites",
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
