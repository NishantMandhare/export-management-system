"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Building2,
    Package,
    ClipboardList,
    Container,
    Users,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
} from "@/components/ui/sidebar";

const items = [
    { title: "Dashboard", url: "/", icon: LayoutDashboard },
    { title: "Exporters", url: "/exporters", icon: Building2 },
    { title: "Products", url: "/products", icon: Package },
    { title: "Orders", url: "/orders", icon: ClipboardList },
    { title: "Containers", url: "/containers", icon: Container },
    { title: "Users", url: "/users", icon: Users },
];

export function AppSidebar() {
    const pathname = usePathname();

    return (
        <Sidebar>
            <SidebarHeader>
                <div className="px-2 py-2 font-semibold text-lg">ExportMS</div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-1.5">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={pathname === item.url}
                                        className="h-10"
                                    >
                                        <Link href={item.url} className="flex items-center gap-3">
                                            <item.icon className="size-4 shrink-0" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}