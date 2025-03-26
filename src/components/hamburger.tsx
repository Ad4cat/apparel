"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "./ui/sidebar";
import { Home, Tags, Flame, BookOpen } from "lucide-react";

const Hamburger = () => {
  const { open, setOpen } = useSidebar();
  const contents = [
    { title: "HOME", url: "/", icon: Home },
    { title: "ALL-PRODUCTs", url: "/products", icon: Tags },
    { title: "Latest-Arrivals", url: "/#latest", icon: Flame },
    { title: "LookBook", url: "/#lookbook", icon: BookOpen },
  ];
  return (
    <div>
      <SidebarTrigger className="flex p-0 text-black font-semibold hover:text-rose-600 transition-colors cursor-pointer" />
      <Sidebar side="right" className="z-sideBar">
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroupContent>
            <SidebarMenu>
              {contents.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="font-extrabold space-y-5 "
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <SidebarFooter>Login</SidebarFooter>
          </SidebarGroupContent>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Hamburger;
