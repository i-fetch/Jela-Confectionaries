"use client"

import * as React from "react"
import {
  Command,
  LayoutDashboard,
  Send,
  SquareMenu,
  ShoppingCart,
  Calendar,
  Heart,
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
      icon: ShoppingCart,
      url: "/cafestore/cafeonitsha/orders",
    },
    {
      title: "Reservations",
      icon: Calendar,
      url: "/cafestore/cafeonitsha/reservations",
    },
    {
      title: "Favourites",
      icon: Heart,
      url: "/cafestore/cafeonitsha/favourites",
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

export function AppSidebar({ ...props }) {
  return (
    <Sidebar
      variant="inset"
      className="bg-[#000] text-[#FFD700]  shadow-lg "
      {...props}
    >
      {/* Header Section */}
      <SidebarHeader className="px-4 py-3 shadow shadow-lg bg-black rounded-b-none border-b border-[#333]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/" className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-xl bg-[#FFD700] text-black p-2 shadow-md">
                  <Command className="h-5 w-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-sm text-[#FFD700]">Jela's Café</span>
                  <span className="text-xs text-[#f5c351]">Confectionary</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Navigation Section */}
      <SidebarContent className="flex flex-col gap-2 px-4 py-3 text-[#FFD700] bg-black ">
        <NavMain items={data.navMain} />
        <div className="mt-4 border-t border-[#333] pt-3">
          <NavSecondary items={data.navSecondary} />
        </div>
      </SidebarContent>

      {/* Footer (User Info / Profile) */}
      <SidebarFooter className="px-4 py-3  text-[#FFD700] bg-[#090808] ">
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
